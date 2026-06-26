// functions/api/jobs.js
// Cloud storage for saved jobs (estimates + work orders), backed by SCRIBE_KV.
// Records stored under key  job:<id>  with a lightweight summary in KV metadata,
// so the list endpoint is fast and doesn't need to read every record.

const J = 'job:';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: Object.assign({ 'Content-Type': 'application/json' }, CORS)
  });
}

// Cloudflare Access stamps the signed-in user; fall back to the Access JWT on Pages.
function who(request) {
  const h = (request.headers.get('Cf-Access-Authenticated-User-Email') || '').toLowerCase();
  if (h) return h;
  const jwt = request.headers.get('Cf-Access-Jwt-Assertion') || request.headers.get('cf-access-jwt-assertion');
  if (!jwt) return '';
  try {
    const part = jwt.split('.')[1]; if (!part) return '';
    let b = part.replace(/-/g, '+').replace(/_/g, '/'); while (b.length % 4) b += '=';
    const p = JSON.parse(atob(b));
    return (p.email || (p.identity && p.identity.email) || '').toLowerCase();
  } catch (e) { return ''; }
}

export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.SCRIBE_KV;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (!kv) return json({ error: 'KV binding SCRIBE_KV not found' }, 500);

  try {
    // ---- GET: one record (?id=) or a list ----
    if (request.method === 'GET') {
      const id = url.searchParams.get('id');
      if (id) {
        const v = await kv.get(J + id);
        return json(v ? JSON.parse(v) : null);
      }
      const mine = url.searchParams.get('mine');
      const kind = url.searchParams.get('kind');
      const email = who(request);

      let keys = [], cursor, complete = false;
      while (!complete) {
        const r = await kv.list({ prefix: J, cursor });
        keys = keys.concat(r.keys || []);
        cursor = r.cursor;
        complete = r.list_complete;
      }
      let items = keys.map(k => Object.assign({ id: k.name.slice(J.length) }, k.metadata || {}));
      const profileId = url.searchParams.get('profileId');
      if (kind) items = items.filter(i => i.kind === kind);
      if (profileId) items = items.filter(i => (i.profileId || '') === profileId);
      if (mine && email) items = items.filter(i => (i.createdByEmail || '') === email);
      items.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
      return json(items);
    }

    // ---- PUT: create or update ----
    if (request.method === 'PUT') {
      const body = await request.json();
      const now = Date.now();
      const id = body.id || (now.toString(36) + Math.random().toString(36).slice(2, 7));
      const email = who(request);

      let createdAt = now, createdByEmail = email, estNumber = '';
      if (body.id) {
        const ex = await kv.get(J + id);
        if (ex) { const e = JSON.parse(ex); createdAt = e.createdAt || now; createdByEmail = e.createdByEmail || email; estNumber = e.estNumber || ''; }
      }
      // Assign a chronological estimate number on first save: TDP-YYYY-MM-NNN
      if ((body.kind || 'estimate') === 'estimate' && !estNumber) {
        const d = new Date();
        const ym = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
        const ck = 'counter:est:' + ym;
        const next = (parseInt(await kv.get(ck) || '0', 10) || 0) + 1;
        await kv.put(ck, String(next));
        estNumber = 'TDP-' + ym + '-' + String(next).padStart(3, '0');
      }

      const rec = {
        id,
        kind: body.kind || 'estimate',
        title: (body.title || 'Untitled').slice(0, 120),
        customer: body.customer || {},
        payload: body.payload || {},
        total: body.total || 0,
        doorsCount: body.doorsCount || 0,
        status: body.status || 'draft',
        profileId: body.profileId || '',
        profileNumber: body.profileNumber || '',
        estNumber,
        createdAt, createdByEmail,
        createdByName: (body.createdByName || '').slice(0, 80),
        updatedAt: now
      };
      // KV metadata cap is 1024 bytes — keep the summary small.
      const meta = {
        kind: rec.kind, title: rec.title, total: rec.total,
        doorsCount: rec.doorsCount, status: rec.status,
        createdByEmail: rec.createdByEmail, createdByName: rec.createdByName,
        profileId: rec.profileId, profileNumber: rec.profileNumber, estNumber: rec.estNumber,
        updatedAt: now
      };
      await kv.put(J + id, JSON.stringify(rec), { metadata: meta });
      return json({ id, updatedAt: now, estNumber });
    }

    // ---- DELETE: ?id= ----
    if (request.method === 'DELETE') {
      const id = url.searchParams.get('id');
      if (id) await kv.delete(J + id);
      return json({ ok: true });
    }

    return json({ error: 'method not allowed' }, 405);
  } catch (e) {
    return json({ error: String((e && e.message) || e) }, 500);
  }
}
