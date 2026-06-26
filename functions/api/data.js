// Scribe backend — Cloudflare Pages Function at /api/data
// Stores one JSON document (catalog + materials + settings) in KV.
// Bind a KV namespace to this Pages project with the variable name SCRIBE_KV.
// This runs on scribe.thedoorpro.ca, so it sits behind the same Cloudflare Access login.

const KEY = "master";
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.SCRIBE_KV;

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: CORS });
  }

  if (!kv) {
    return json({ error: "KV namespace SCRIBE_KV is not bound to this project." }, 500);
  }

  if (request.method === "GET") {
    const v = await kv.get(KEY);
    return json(v ? JSON.parse(v) : {}, 200);
  }

  if (request.method === "PUT") {
    try {
      const body = await request.text();
      JSON.parse(body); // validate
      await kv.put(KEY, body);
      return json({ ok: true, savedAt: Date.now() }, 200);
    } catch (e) {
      return json({ error: "Invalid JSON body." }, 400);
    }
  }

  return json({ error: "Method not allowed." }, 405);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}
