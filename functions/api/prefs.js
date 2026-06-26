// /api/prefs — per-user preferences (theme, avatar, bio). Identity from Access.
function json(o, s = 200) {
  return new Response(JSON.stringify(o), { status: s, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
}
function cors() {
  return new Response(null, { headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  }});
}
function whoEmail(request) {
  const h = (request.headers.get("Cf-Access-Authenticated-User-Email") || "").toLowerCase();
  if (h) return h;
  const jwt = request.headers.get("Cf-Access-Jwt-Assertion") || request.headers.get("cf-access-jwt-assertion");
  if (!jwt) return "";
  try {
    const part = jwt.split(".")[1]; if (!part) return "";
    let b = part.replace(/-/g, "+").replace(/_/g, "/"); while (b.length % 4) b += "=";
    const p = JSON.parse(atob(b));
    return (p.email || (p.identity && p.identity.email) || "").toLowerCase();
  } catch (e) { return ""; }
}
const DEFAULTS = { theme: "dark", avatar: "hinge", bio: "", joinedAt: "" };

export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.SCRIBE_KV;
  if (request.method === "OPTIONS") return cors();

  const email = whoEmail(request);
  if (!email) return json({ error: "no identity" }, 401);
  const key = "prefs:" + email;

  if (request.method === "GET") {
    let raw = await kv.get(key);
    let p = DEFAULTS;
    if (raw) { try { p = Object.assign({}, DEFAULTS, JSON.parse(raw)); } catch (e) {} }
    if (!p.joinedAt) { p.joinedAt = new Date().toISOString(); await kv.put(key, JSON.stringify(p)); }
    return json(p);
  }

  if (request.method === "PUT") {
    let body = {};
    try { body = await request.json(); } catch (e) {}
    let cur = DEFAULTS;
    const raw = await kv.get(key);
    if (raw) { try { cur = Object.assign({}, DEFAULTS, JSON.parse(raw)); } catch (e) {} }
    if (body.theme === "light" || body.theme === "dark") cur.theme = body.theme;
    if (typeof body.avatar === "string") cur.avatar = body.avatar.slice(0, 24);
    if (typeof body.bio === "string") cur.bio = body.bio.slice(0, 500);
    if (!cur.joinedAt) cur.joinedAt = new Date().toISOString();
    await kv.put(key, JSON.stringify(cur));
    return json(cur);
  }

  return json({ error: "method" }, 405);
}
