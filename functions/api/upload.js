// TheDoorPro — Photo upload endpoint (Cloudflare Pages Function)
// Lives at: https://thedoorpro.ca/api/upload
// Receives one or more photos from the chat, uploads them to HubSpot File Manager
// using the secret HUBSPOT_TOKEN, and returns public file URLs.
// The website sends photos here; this endpoint attaches them to HubSpot. The token
// is never exposed to the browser.

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Browser test: visit /api/upload — confirms the endpoint is deployed.
export async function onRequestGet({ env }) {
  const hasToken = !!env.HUBSPOT_TOKEN;
  return new Response(JSON.stringify({
    status: "ok",
    message: "Upload endpoint is LIVE",
    hubspot_token_present: hasToken,
    note: hasToken ? "Ready to receive photos." : "Add HUBSPOT_TOKEN in Cloudflare to enable photo delivery.",
  }, null, 2), { status: 200, headers: { "Content-Type": "application/json", ...cors } });
}

export async function onRequestOptions() {
  return new Response(null, { headers: cors });
}

export async function onRequestPost({ request, env }) {
  try {
    const token = env.HUBSPOT_TOKEN;
    if (!token) {
      return new Response(JSON.stringify({ error: "Photo upload not configured (HUBSPOT_TOKEN missing)" }),
        { status: 500, headers: { "Content-Type": "application/json", ...cors } });
    }

    // The chat sends a multipart form with one or more "photo" files.
    const form = await request.formData();
    const files = form.getAll("photo").filter(f => f && typeof f === "object");
    if (!files.length) {
      return new Response(JSON.stringify({ error: "No photos received" }),
        { status: 400, headers: { "Content-Type": "application/json", ...cors } });
    }

    const urls = [];
    for (const file of files.slice(0, 8)) { // up to 8 photos per submission
      const hsForm = new FormData();
      hsForm.append("file", file, file.name || "photo.jpg");
      hsForm.append("folderPath", "/mortise-chat-photos");
      hsForm.append("options", JSON.stringify({ access: "PUBLIC_INDEXABLE", overwrite: false }));

      const res = await fetch("https://api.hubapi.com/files/v3/files", {
        method: "POST",
        headers: { "Authorization": "Bearer " + token },
        body: hsForm,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        urls.push(data.url);
      }
    }

    return new Response(JSON.stringify({ ok: urls.length > 0, urls }),
      { status: 200, headers: { "Content-Type": "application/json", ...cors } });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Upload error", detail: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json", ...cors } });
  }
}
