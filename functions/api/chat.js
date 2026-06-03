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
        model: body.model || "claude-sonnet-4-20250514",
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

// Simple browser test: visit https://thedoorpro.ca/api/chat in your browser.
// If you SEE this message, the function deployed correctly.
// If you get a 404 / "Not Found" / 405, the functions folder did NOT deploy.
export async function onRequestGet() {
  return new Response(
    JSON.stringify({ status: "ok", message: "Mortise function is LIVE on TheDoorPro" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
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
