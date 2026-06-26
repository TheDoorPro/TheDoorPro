// functions/api/profiles.js
// Customer profiles ("files") for The Hinge, backed by SCRIBE_KV.
//   profile:<id>      -> full record (with activity log)
//   counter:project:<year> -> running number for TDP-<year>-NNN
// Summary is stored in KV metadata so search/list is fast.

const P = 'profile:';
const CNT = 'counter:project:';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};
function json(o, s) {
  return new Response(JSON.stringify(o), { status: s || 200, headers: Object.assign({ 'Content-Type': 'application/json' }, CORS) });
}
function who(req) {
  const h = (req.headers.get('Cf-Access-Authenticated-User-Email') || '').toLowerCase();
  if (h) return h;
  const jwt = req.headers.get('Cf-Access-Jwt-Assertion') || req.headers.get('cf-access-jwt-assertion');
  if (!jwt) return '';
  try {
    const part = jwt.split('.')[1]; if (!part) return '';
    let b = part.replace(/-/g, '+').replace(/_/g, '/'); while (b.length % 4) b += '=';
    const p = JSON.parse(atob(b));
    return (p.email || (p.identity && p.identity.email) || '').toLowerCase();
  } catch (e) { return ''; }
}
function pad(n) { return String(n).padStart(3, '0'); }

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const kv = env.SCRIBE_KV;
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (!kv) return json({ error: 'KV binding SCRIBE_KV not found' }, 500);

  try {
    if (request.method === 'GET') {
      const id = url.searchParams.get('id');
      if (id) { const v = await kv.get(P + id); return json(v ? JSON.parse(v) : null); }

      const q = (url.searchParams.get('q') || '').trim().toLowerCase();
      const status = url.searchParams.get('status') || '';
      const statusesParam = (url.searchParams.get('statuses') || '').trim();
      const scope = url.searchParams.get('scope') || '';
      const me = who(request);
      let keys = [], cursor, done = false;
      while (!done) { const r = await kv.list({ prefix: P, cursor }); keys = keys.concat(r.keys || []); cursor = r.cursor; done = r.list_complete; }
      let items = keys.map(k => Object.assign({ id: k.name.slice(P.length) }, k.metadata || {}));
      if (statusesParam) {
        const allow = statusesParam.split(',').map(s => s.trim()).filter(Boolean);
        items = items.filter(i => allow.includes(i.status || 'active'));
      } else if (status) {
        items = items.filter(i => (i.status || 'active') === status);
      } else {
        items = items.filter(i => ((i.status || 'active') === 'active')); // default: only active
      }
      if (scope === 'mine' && me) items = items.filter(i => (i.createdByEmail || '').toLowerCase() === me);
      if (q) items = items.filter(i => (i.search || '').includes(q));
      items.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
      // don't leak the search blob to the client list
      items.forEach(i => { delete i.search; });
      return json(items);
    }

    if (request.method === 'PUT') {
      const body = await request.json();
      const now = Date.now();
      const email = who(request);
      let id = body.id || (now.toString(36) + Math.random().toString(36).slice(2, 7));
      let rec = null, isNew = true;

      if (body.id) { const ex = await kv.get(P + id); if (ex) { rec = JSON.parse(ex); isNew = false; } }
      if (!rec) {
        const year = new Date().getFullYear();
        const ckey = CNT + year;
        const n = (parseInt(await kv.get(ckey), 10) || 0) + 1;
        await kv.put(ckey, String(n));
        rec = { id, number: 'TDP-' + year + '-' + pad(n), createdAt: now, createdByEmail: email, activity: [], links: {} };
        isNew = true;
      }

      ['name', 'phone', 'email', 'notes', 'status', 'first', 'last', 'deletedReason', 'deletedBy', 'deletedAt'].forEach(f => { if (body[f] != null) rec[f] = body[f]; });
      if (body.addr) rec.addr = Object.assign(rec.addr || {}, body.addr);
      rec.status = rec.status || 'active';
      rec.updatedAt = now;

      const action = (body.action || (isNew ? 'Created profile' : 'Updated details')).slice(0, 80);
      rec.activity = rec.activity || [];
      rec.activity.unshift({ ts: now, user: email || 'unknown', action, details: (body.details || null) });
      rec.activity = rec.activity.slice(0, 60);

      const a = rec.addr || {};
      let search = [rec.number, rec.name, rec.first, rec.last, rec.phone, rec.email, a.street, a.city, a.postal].filter(Boolean).join(' ').toLowerCase().slice(0, 360);
      const meta = {
        number: rec.number, name: rec.name || '', first: rec.first || '', last: rec.last || '',
        phone: rec.phone || '', email: rec.email || '',
        street: a.street || '', city: a.city || '', prov: a.prov || '', postal: a.postal || '',
        status: rec.status, updatedAt: now,
        createdByEmail: rec.createdByEmail || email, search
      };
      await kv.put(P + id, JSON.stringify(rec), { metadata: meta });
      return json({ id, number: rec.number });
    }

    if (request.method === 'DELETE') {
      const id = url.searchParams.get('id');
      if (id) await kv.delete(P + id);
      return json({ ok: true });
    }
    return json({ error: 'method not allowed' }, 405);
  } catch (e) {
    return json({ error: String((e && e.message) || e) }, 500);
  }
}
