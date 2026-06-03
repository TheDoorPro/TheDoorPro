// TheDoorPro — Mortise backend (Cloudflare Pages Function)
// Lives at: https://thedoorpro.ca/api/chat
// Holds the Anthropic API key SECURELY as an environment variable (env.ANTHROPIC_API_KEY).
// The website talks to THIS endpoint; this endpoint talks to Anthropic. The key is never
// exposed to the browser.

export async function onRequestPost({ request, env }) {
  // CORS headers so the site can call this endpoint
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const key = env.ANTHROPIC_API_KEY;
    if (!key) {
      return new Response(JSON.stringify({ error: "Server not configured" }), {
        status: 500, headers: { "Content-Type": "application/json", ...cors },
      });
    }

    // Take the chat payload the website sent (model, system, messages, max_tokens)
    const body = await request.json();

    // Forward it to Anthropic WITH the secret key attached server-side
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: body.model || "claude-sonnet-4-6",
        max_tokens: body.max_tokens || 1000,
        system: body.system || "",
        messages: body.messages || [],
      }),
    });

    const data = await upstream.text(); // pass Anthropic's response straight back
    return new Response(data, {
      status: upstream.status,
      headers: { "Content-Type": "application/json", ...cors },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Proxy error" }), {
      status: 500, headers: { "Content-Type": "application/json", ...cors },
    });
  }
}

// Browser test + live key check: visit https://thedoorpro.ca/api/chat
// It makes a tiny real call to Anthropic and shows EXACTLY what happens.
export async function onRequestGet({ env }) {
  const key = env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ test: "FAIL", reason: "No API key found in Cloudflare (env.ANTHROPIC_API_KEY missing)" }, null, 2),
      { status: 200, headers: { "Content-Type": "application/json" } });
  }
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 20, messages: [{ role: "user", content: "Say OK" }] }),
    });
    const body = await r.text();
    const ok = r.status === 200;
    return new Response(JSON.stringify({
      test: ok ? "PASS \u2705 Mortise can talk to Anthropic" : "FAIL \u274c Anthropic rejected the call",
      anthropic_status: r.status,
      key_starts_with: key.slice(0, 14),
      key_length: key.length,
      anthropic_said: body.slice(0, 400),
    }, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ test: "FAIL", reason: "Could not reach Anthropic", detail: String(e) }, null, 2),
      { status: 200, headers: { "Content-Type": "application/json" } });
  }
}

// Handle the browser's CORS preflight check
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
