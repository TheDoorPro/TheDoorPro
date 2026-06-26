// /api/me — who is logged in + their role and display name
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
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }});
  }
  const kv = env.SCRIBE_KV;
  const email = whoEmail(request);
  const roles = await getRoles(kv);
  const entry = roles[email];
  return json({
    email,
    role: entry ? entry.role : "employee",
    name: entry ? entry.name : "",
    known: !!entry
  });
}
