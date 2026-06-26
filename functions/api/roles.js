// /api/roles — manage the team list (email -> role + display name). Admin/Super only.
const SEED = {
  "lucas_kearney@outlook.com": { role: "super", name: "Lucas Kearney" },
  "tdpadmin1@gmail.com":       { role: "admin", name: "TheDoorPro Office" },
  "request@thedoorpro.ca":     { role: "employee", name: "Field Employee" }
};

function json(o, status = 200) {
  return new Response(JSON.stringify(o), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}
function cors() {
  return new Response(null, { headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  }});
}
async function getRoles(kv) {
  const raw = await kv.get("config:roles");
  if (!raw) { await kv.put("config:roles", JSON.stringify(SEED)); return { ...SEED }; }
  try { return JSON.parse(raw) || {}; } catch (e) { return { ...SEED }; }
}

function emailFromJwt(request) {
  const jwt = request.headers.get("Cf-Access-Jwt-Assertion") || request.headers.get("cf-access-jwt-assertion");
  if (!jwt) return "";
  try {
    const part = jwt.split(".")[1];
    if (!part) return "";
    let b = part.replace(/-/g, "+").replace(/_/g, "/");
    while (b.length % 4) b += "=";
    const payload = JSON.parse(atob(b));
    return (payload.email || (payload.identity && payload.identity.email) || "").toLowerCase();
  } catch (e) { return ""; }
}
function whoEmail(request) {
  return (request.headers.get("Cf-Access-Authenticated-User-Email") || "").toLowerCase() || emailFromJwt(request);
}

export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.SCRIBE_KV;
  const method = request.method;
  if (method === "OPTIONS") return cors();

  const email = whoEmail(request);
  const roles = await getRoles(kv);
  const me = roles[email] || { role: "employee", name: "" };

  // Only admin/super can read or manage the team list
  if (me.role !== "admin" && me.role !== "super") return json({ error: "forbidden" }, 403);

  if (method === "GET") {
    const list = Object.entries(roles)
      .map(([e, v]) => ({ email: e, role: v.role, name: v.name || "" }))
      .sort((a, b) => a.name.localeCompare(b.name));
    return json({ me: { email, role: me.role, name: me.name || "" }, team: list });
  }

  if (method === "PUT") {
    let body = {};
    try { body = await request.json(); } catch (e) {}
    const tgt = (body.email || "").toLowerCase().trim();
    const role = body.role || "employee";
    if (!tgt || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(tgt)) return json({ error: "Valid email required" }, 400);
    if (!["employee", "admin", "super"].includes(role)) return json({ error: "Bad role" }, 400);
    // Protect super-admins: only a super can create/modify a super (or change one)
    const targetIsSuper = role === "super" || (roles[tgt] && roles[tgt].role === "super");
    if (targetIsSuper && me.role !== "super") return json({ error: "Only a super-admin can manage super-admins" }, 403);
    roles[tgt] = { role, name: (body.name != null ? body.name : (roles[tgt] && roles[tgt].name) || "") };
    await kv.put("config:roles", JSON.stringify(roles));
    return json({ ok: true, email: tgt, role, name: roles[tgt].name });
  }

  if (method === "DELETE") {
    if (me.role !== "super") return json({ error: "Only a super-admin can remove team members" }, 403);
    const tgt = (new URL(request.url).searchParams.get("email") || "").toLowerCase();
    if (tgt === email) return json({ error: "You can't remove yourself" }, 400);
    if (roles[tgt]) { delete roles[tgt]; await kv.put("config:roles", JSON.stringify(roles)); }
    return json({ ok: true });
  }

  return json({ error: "Method not allowed" }, 405);
}
