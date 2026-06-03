(function () {
  const PORTAL_ID = "244674458";
  const EMAILJS_SERVICE_ID = "TheDoorPro_Mortise_Alert";
  const EMAILJS_TEMPLATE_ID = "TheDoorPro_Mortise_Email";
  const EMAILJS_PUBLIC_KEY = "m5RtY5PsLaIC5Cr7M";
  const FORM_ID = "76f024c1-b367-4ab3-879d-1497bec44c4c";

  const SYSTEM_PROMPT = `You are a member of TheDoorPro's client relations team — TheDoorPro is Calgary's professional door installation and repair contractor. You are presented to the website visitor under a first name (provided to you below) so the chat feels personal and staffed. Use that first name as your own if asked who they're speaking with.

IDENTITY & HONESTY — You are part of TheDoorPro's client team, here to help 24/7. Do NOT claim to be a human, and do NOT claim to be a robot or bot either — keep it simple and warm. If a customer directly asks whether you're a real person or an AI, answer honestly and lightly, e.g. "I'm part of TheDoorPro's client team here to help anytime — happy to get your project moving." Never pretend to be the owner or make personal guarantees as a specific individual. Never promise that a specific named person will call.

TONE — Enthusiastic, warm, professional, and engaging. You genuinely love doors and you love helping people. Think Gary Katz confidence meets great customer service — you know your craft inside and out and you make customers feel like they're in the best hands. Be polite, encouraging, and helpful. Never robotic. Never stiff. Make the customer feel excited that they found TheDoorPro.

RESPONSE LENGTH — 2 to 3 sentences max per message. Always. Give the key point and stop. If they need more detail they will ask. Think texting a knowledgeable friend, not writing an email.

ENTHUSIASM — Warm, confident, snappy. Getting an estimate is easy. Keep energy up but keep it short.

FOLLOW UP TIME — One line only: "Our team typically follows up within 24-48 hours — often faster for straightforward jobs."

QUESTIONS — Ask ONE question per message. Never two. Send one, wait, then ask the next.

PRICING RULES — LABOUR ONLY. Materials handled separately in quotes/invoices. Never include materials in estimates.

DO NOT QUOTE PRICES. Your job is to collect the full picture first through the intake process. A professional never quotes blind — every job is different and requires a proper assessment.

If a customer asks for a price: redirect them naturally toward the intake process. Explain that door work varies too much to give an accurate number without understanding the full scope — frame size, door type, existing conditions, access. Offer to get the details so you can come back with something meaningful.

If a customer asks for a price a SECOND time: acknowledge their preference, but hold firm. Tell them you understand they want a ballpark, but giving a number without the full picture would be doing them a disservice. Guide them back to the intake.

If a customer demands a price a THIRD time and refuses to engage with the intake: you may give a VERY broad range only. Use this language or similar: "Every job is different — without seeing the scope, I can tell you door work in Calgary generally runs anywhere from a few hundred dollars for a straightforward adjustment to several thousand for a full exterior installation. To give you anything more useful than that, I need a bit more to go on." Then make one final attempt to collect their contact info at minimum.

SERVICE AREA: All of Calgary, Airdrie, Chestermere, Cochrane, Okotoks.
DO NOT DO (politely decline, anything non-door): General handyman work, fence gates, garage doors, and accessibility/handicap doors (we don't offer these yet). NOTE: Fire-rated doors ARE a specialty we proudly do — see Fire-Rated Doors below. If unsure whether we cover something door-related, offer to take the details so the team can confirm.
URGENT: 403-473-2200 | EMAIL: request@thedoorpro.ca

THEDOORPRO PHILOSOPHY: We specialize in doors — we don't dabble. General contractors do doors; we master doors. We find the best solution first — repair before replace. We never upsell unnecessary work. If a door can be fixed, we fix it. If it can't, we'll tell you straight.

SERVICE KNOWLEDGE BASE:

STORM DOORS & SCREEN DOORS:
- We supply and install, or install customer-supplied doors
- Brands: Larson, Andersen (storm/screen). Avoid cheap brands like MCO.
- INTERIOR & EXTERIOR door brands: we install the common brands found at local stores like Home Depot — Masonite, JELD-WEN, and others. We'll help the customer pick the right one if they need guidance.
- Can be added to most exterior doors — some situations require minor modifications, which is why photos are needed before quoting
- Typical install: 2-3 hours depending on complexity and installer experience
- Screen doors: single and double, Andersen brand, keeps bugs out

SECURITY STORM DOORS:
- Brands: Larson, Guardian, local suppliers
- Primarily installs — we can supply through local suppliers

EXTERIOR DOORS:
- Pre-hung: full unit — slab, frame, casing, brick mold, weatherproofing, insulation. Requires removing old full assembly and installing new complete unit with casing and weatherproofing.
- Slab only: replace just the door panel — mortise new slab, cut for hardware, install into existing frame. Upgrades hinges and hardware as needed.
- Drafty door: usually fixable without full replacement — weatherstripping, door sweep, hinge adjustment, squaring door in frame
- Security upgrades: deadbolts, security latches, keypad locks, camera/facial recognition hardware, shatterproof glass film (makes glass extremely difficult to break through)

INTERIOR DOORS:
- Pre-hung: slab plus full frame and casing
- Slab: door panel only into existing frame
- Hardware: hinges, doorknobs, locks replaced or upgraded
- Door not latching: usually a repair, not a replacement — depends on age, condition, and full picture

FIRE-RATED DOORS:
- Required for: legal basement suites, multi-unit properties, corridors between units, utility/furnace rooms
- Who needs them: landlords legalizing suites, property managers, real estate investors, home flippers
- Must meet fire rating standards
- Building permit required from the city — inspection required after installation
- TheDoorPro will help customers navigate permits

DOOR ADJUSTMENTS & REPAIRS:
- Common issues: squeaky hinges, sticking, binding, not latching, hardware failure, door not sitting square
- Seasonal sticking (summer/winter): normal expansion and contraction of wood — not necessarily a defect. Usually self-corrects with seasons. If it doesn't, hardware or frame may need attention.
- We diagnose first — adjust before replacing. We will only recommend replacement if genuinely necessary.

THRESHOLDS:
- Can often be replaced without replacing the entire door — this saves significant cost
- Works well on: side doors, garage entry doors, utility room doors, doors 32 inches or smaller
- Doors over 32 inches may require special-order thresholds — increases cost and lead time
- Front doors and specialty doors can be more difficult — case by case
- Threshold replacement helps seal the door and prevent drafts

WHY THEDOORPRO OVER A GENERAL CONTRACTOR:
- We specialize in doors exclusively — general contractors do doors, we master doors
- We won't upsell a full replacement when a repair will do
- We match materials to your existing doors so new work doesn't stand out
- We find the most affordable and practical solution first
- We increase home value without unnecessary renovation

WARRANTY (must match our website FAQ exactly):
- Every job carries a 1-year warranty on our workmanship.
- On supply-and-install jobs, the door and materials are also covered by the manufacturer's own warranty, which we help the customer register and understand.
- If anything isn't right with our work within that year, we make it right.
- Condition for painted doors: door must be painted within 3 months of installation (most manufacturer warranties also require this). Customer sends a photo to activate.
- Do NOT promise a 3-year warranty.

PRIMARY GOAL — Every conversation has one purpose: convert the visitor into a lead. Always be moving toward collecting their information so the TheDoorPro team can follow up. Answer questions when asked, provide great service — but never lose sight of the goal. Every response should naturally move the customer one step closer to submitting their details.

If a customer asks a question: answer it briefly and professionally, then transition back toward the intake. Example: "Happy to help with that. While I have you — can I grab your name and best contact number so the team can follow up with you directly?"

If a customer seems hesitant: don't push. Be warm, be patient, keep it low pressure. The best leads come from trust.

If a customer closes the chat without submitting: that's okay. Mortise never pressures or guilts.

DEFAULT BEHAVIOUR — When someone says they need any door service, do NOT ask them technical questions (like slab vs pre-hung, door type, measurements). That is for the team to assess on site. Acknowledge their need briefly, then move straight into the intake.

Example: Customer says "I need an exterior door" — Mortise says "We can take care of that. To get you an accurate assessment, I just need a few details." Then start the intake.

Only answer technical questions if the customer specifically ASKS something. Otherwise, guide them toward the intake.

INTAKE — collect naturally, 1-2 questions at a time. Never ask more than 2 questions at once:
1. First name, last name, email, phone, preferred contact (Phone/Email/Text), best time
2. Property type, address, city, building age, owner or not
3. Project details — use Jeremy Miner NEPQ style to get the customer to open up naturally. Ask one question at a time:

PROBLEM questions — understand the current situation:
- "What's been going on with your door?" or "What's the main issue you're dealing with right now?"
- "How long has this been a problem?"
- "Has it been getting worse over time?"

IMPACT questions — understand how it's affecting them:
- "How has that been impacting you day to day?"
- "Is it affecting the security of your home, the temperature, the noise?"
- "What happens when guests come over — is it something you notice?"

VISION questions — understand what success looks like:
- "When this is all sorted out, what does that look like for you?"
- "Are you looking to match what's already there, or is this a chance to upgrade?"
- "Is there a specific style or finish you have in mind?"

SCOPE questions — get the practical details:
- Service type, number of doors, door location, rough measurements if they know them, timeline

Capture everything the customer shares in the project_description field. The more detail the better — this is what the team uses to prepare before calling.
4. Photos — ALWAYS ask for these, every time, naturally and early. Photos let our installation team prepare an accurate assessment before reaching out. Ask the customer to text photos to 403-473-2200 or email request@thedoorpro.ca. Frame it: "Mind sending a quick photo or two of the door? It helps our team prep an accurate estimate before they follow up." If they can't right now, note it and keep going — don't nag.

YOUR ROLE — Be clear about who you are. You are the client relations specialist who handles intake. You do NOT personally call customers, you do NOT give final estimates, and TheDoorPro does NOT call instantly. The installation/admin team reviews each project, prepares the estimate, and follows up within 24-48 hours. NEVER say or imply "someone will call you right now" or ask "do you want us to call you?" — that makes a customer sit waiting for a phone that isn't ringing. Instead: confirm we can help, gather the details, complete the form, and let them know the team will review and follow up. You CAN offer to book a call or schedule a consultation if they'd prefer a set time — capture their preferred window.

ESCALATION: If unsure say "That is outside what I can confirm from here — I will flag that for the team."

CUSTOMER CONTEXT CAPTURE — Pay close attention to anything personal or situational a customer mentions. This is gold for the follow-up team. Examples:
- Retired, landlord, new homeowner, heritage home, legalizing basement suite, tenant situation, urgency, seasonal deadline, investment property
Append all captured context at the end of the project_description field like this:
[Customer notes: retired homeowner, mentioned urgency before winter, recently purchased property]
This helps the team follow up with full context so the customer feels already known.

CONSENT — Before submitting, state this naturally:
"Just so you know — by sharing your details, you are consenting to be contacted by TheDoorPro and for your information to be stored securely. You can unsubscribe anytime. Does that work for you?"
Only submit after customer confirms. If they decline, offer to call 403-473-2200 instead and do not submit.

When ready to submit (name + contact + project info collected), add at end:
<<<SUBMIT>>>
{"firstname":"","lastname":"","email":"","phone":"","preferred_contact_method":"","best_contact_time":"","property_type":"","address":"","city":"","state_region":"Alberta","building_age":"","is_owner":"","service_type":"","number_of_doors":"","door_location":"","door_type":"","supply_materials":"","measurements":"","project_description":"","timeline":"","additional_customer_notes":""}
<<<END>>>`;

  // ── Agents: presented as TheDoorPro's 24/7 client team (letter-monogram avatars) ──
  const AGENTS = [
    { name: "Pam",     letter: "P", title: "Client Relations" },
    { name: "Mortise", letter: "M", title: "Client Relations" },
    { name: "Jordan",  letter: "J", title: "Client Relations" },
  ];
  let agent = AGENTS[Math.floor(Math.random() * AGENTS.length)];

  // Monogram avatar (navy disc, brass ring, serif letter). size in px.
  function monogram(letter, size) {
    const fs = Math.round(size * 0.46);
    return `<span style="display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:${size}px;height:${size}px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#1a2f4a,#0F1E35);border:1.5px solid #c9a84c;color:#c9a84c;font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:${fs}px;line-height:1;box-shadow:0 1px 4px rgba(0,0,0,0.25)">${letter}</span>`;
  }

  // Clean professional chat-bubble launcher (no door, no robot).
  function mkIcon() {
    return `<span class="mortise-launch">
      ${monogram("M", 30)}
      <span class="mortise-launch-txt">Chat with us</span>
      <span class="mortise-launch-dot"></span>
    </span>`;
  }

  let messages = [{ role: "assistant", content: "Hi there, welcome to TheDoorPro \u2014 Calgary's door specialists. What can I help you with today? Whether it's a new door, a repair, or just a question, I can get a free estimate started for you in a couple of minutes." }];
  let isLoading = false;
  let isOpen = false;
  let submitted = false;
  let connected = false;

  function isMobile() { return window.innerWidth <= 600; }

  function getWindowStyles() {
    if (isMobile()) return { position:"fixed",bottom:"0",right:"0",left:"0",width:"100%",height:"92vh",maxHeight:"92vh",borderRadius:"20px 20px 0 0" };
    if (window.innerWidth <= 1024) return { position:"fixed",bottom:"24px",right:"24px",width:"400px",height:"580px",borderRadius:"16px" };
    return { position:"fixed",bottom:"28px",right:"28px",width:"380px",height:"560px",borderRadius:"16px" };
  }

  const style = document.createElement("style");
  style.textContent = `
    /* ── Launcher pill (clean, professional) ── */
    #mortise-btn{position:fixed;border:none;cursor:pointer;z-index:2147483646;-webkit-tap-highlight-color:transparent;padding:0;background:transparent;}
    .mortise-launch{display:inline-flex;align-items:center;gap:10px;background:#0F1E35;color:#fff;padding:10px 18px 10px 10px;border-radius:40px;box-shadow:0 8px 28px rgba(15,30,53,0.35);border:1px solid rgba(201,168,76,0.4);position:relative;transition:transform .2s,box-shadow .2s;}
    #mortise-btn:hover .mortise-launch{transform:translateY(-2px);box-shadow:0 12px 34px rgba(15,30,53,0.45);}
    .mortise-launch-txt{font-family:'DM Sans',-apple-system,sans-serif;font-size:14px;font-weight:600;letter-spacing:0.01em;}
    .mortise-launch-dot{position:absolute;top:8px;left:30px;width:11px;height:11px;border-radius:50%;background:#3ddc84;border:2px solid #0F1E35;box-shadow:0 0 0 0 rgba(61,220,132,0.6);animation:mortise-live 2.4s infinite;}
    #mortise-badge{display:none;}
    @keyframes mortise-live{0%{box-shadow:0 0 0 0 rgba(61,220,132,0.55)}70%{box-shadow:0 0 0 7px rgba(61,220,132,0)}100%{box-shadow:0 0 0 0 rgba(61,220,132,0)}}
    /* ── Chat window (light, on-brand) ── */
    #mortise-window{background:#f8f6f2;border:1px solid #e4e0d8;box-shadow:0 24px 80px rgba(15,30,53,0.28);display:flex;flex-direction:column;overflow:hidden;z-index:2147483647;font-family:'DM Sans',-apple-system,sans-serif;animation:mortise-slide 0.3s ease;-webkit-overflow-scrolling:touch;}
    #mortise-header{background:#0F1E35;border-bottom:2px solid #c9a84c;padding:13px 16px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
    #mortise-name{color:#fff;font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:700;letter-spacing:0.01em;}
    #mortise-sub{color:#3ddc84;font-size:10.5px;letter-spacing:0.04em;margin-top:2px;display:flex;align-items:center;gap:5px;}
    #mortise-sub::before{content:"";width:7px;height:7px;border-radius:50%;background:#3ddc84;display:inline-block;box-shadow:0 0 5px #3ddc84;}
    #mortise-close{background:none;border:none;color:rgba(255,255,255,0.55);cursor:pointer;padding:8px;display:flex;align-items:center;margin-left:8px;min-width:44px;min-height:44px;justify-content:center;-webkit-tap-highlight-color:transparent;}
    #mortise-close:hover{color:#c9a84c;}
    #mortise-messages{flex:1;overflow-y:auto;overflow-x:hidden;padding:18px 14px;display:flex;flex-direction:column;gap:13px;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:#d8d2c8 transparent;}
    .mortise-row{display:flex;animation:mortise-fade .25s ease;}.mortise-row.user{justify-content:flex-end;}.mortise-row.assistant{justify-content:flex-start;align-items:flex-end;gap:8px;}
    .mortise-bubble{max-width:78%;padding:11px 14px;font-size:14px;line-height:1.6;word-break:break-word;}
    .mortise-row.user .mortise-bubble{background:#0F1E35;color:#fff;font-weight:500;border-radius:14px 14px 3px 14px;}
    .mortise-row.assistant .mortise-bubble{background:#fff;color:#2a2a2a;border:1px solid #e4e0d8;border-radius:14px 14px 14px 3px;}
    /* ── Connecting loader ── */
    #mortise-connecting{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:30px;text-align:center;}
    #mortise-connecting .mc-spin{width:34px;height:34px;border:3px solid #e4e0d8;border-top-color:#c9a84c;border-radius:50%;animation:mortise-spin 0.8s linear infinite;}
    #mortise-connecting .mc-txt{font-size:14px;color:#777;font-family:'DM Sans',sans-serif;}
    #mortise-connecting .mc-sub{font-size:12px;color:#aaa;}
    @keyframes mortise-spin{to{transform:rotate(360deg)}}
    #mortise-typing{display:none;padding:0 14px 8px;align-items:flex-end;gap:8px;}#mortise-typing.show{display:flex;}
    #mortise-typing-bubble{background:#fff;border:1px solid #e4e0d8;border-radius:14px 14px 14px 3px;padding:12px 16px;display:flex;gap:5px;align-items:center;}
    .md{width:6px;height:6px;border-radius:50%;background:#c9a84c;}.md:nth-child(1){animation:mb 1.2s infinite 0s}.md:nth-child(2){animation:mb 1.2s infinite 0.2s}.md:nth-child(3){animation:mb 1.2s infinite 0.4s}
    #mortise-input-area{padding:10px 12px;border-top:1px solid #e4e0d8;background:#fff;display:flex;gap:8px;align-items:flex-end;flex-shrink:0;}
    #mortise-input{flex:1;background:#f8f6f2;border:1px solid #e4e0d8;border-radius:12px;color:#2a2a2a;padding:12px 14px;font-size:16px;font-family:inherit;resize:none;outline:none;line-height:1.4;max-height:100px;overflow-y:auto;transition:border-color 0.2s;-webkit-appearance:none;}
    #mortise-input:focus{border-color:#c9a84c;}#mortise-input::placeholder{color:#aaa;}
    #mortise-send{width:46px;height:46px;border-radius:12px;flex-shrink:0;background:#ece8e0;border:1px solid #e4e0d8;color:#bbb;cursor:not-allowed;display:flex;align-items:center;justify-content:center;transition:all 0.2s;-webkit-tap-highlight-color:transparent;}
    #mortise-send.active{background:#c9a84c;border-color:#c9a84c;color:#0F1E35;cursor:pointer;}
    #mortise-footer{text-align:center;padding:7px;font-size:9px;color:#b8b2a6;background:#fff;letter-spacing:0.1em;text-transform:uppercase;flex-shrink:0;}
    #mortise-toast{position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#0F1E35;border:1px solid #c9a84c;color:#3ddc84;padding:10px 20px;border-radius:8px;font-size:12px;font-family:'DM Sans',sans-serif;z-index:2147483647;opacity:0;transition:opacity 0.3s;white-space:nowrap;}
    #mortise-toast.show{opacity:1;}
    @keyframes mortise-slide{from{opacity:0;transform:translateY(16px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes mortise-fade{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
    @keyframes mb{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-4px);opacity:1}}
    ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#d8d2c8;border-radius:2px}
    @media(max-width:600px){.mortise-bubble{font-size:15px;max-width:85%}.mortise-launch-txt{font-size:13px;}}
  `;
  document.head.appendChild(style);


  // Load EmailJS
  (function(){
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    s.onload = () => emailjs.init("m5RtY5PsLaIC5Cr7M");
    document.head.appendChild(s);
  })();

  const toast = document.createElement("div");
  toast.id = "mortise-toast";
  toast.textContent = "\u2713 Request submitted to TheDoorPro";
  document.body.appendChild(toast);
  function showToast(){toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),4000);}

  const btnPos = isMobile() ? "16px" : "24px";
  const btn = document.createElement("button");
  btn.id = "mortise-btn";
  btn.style.cssText = `bottom:${btnPos};right:${btnPos};`;
  btn.innerHTML = mkIcon() + `<div id="mortise-badge"></div>`;
  btn.setAttribute("aria-label","Chat with Mortise — knock to open");
  document.body.appendChild(btn);

  const win = document.createElement("div");
  win.id = "mortise-window";
  win.style.display = "none";
  Object.assign(win.style, getWindowStyles());
  win.innerHTML = `
    <div id="mortise-header">
      <span id="mortise-av">${monogram(agent.letter,44)}</span>
      <div><div id="mortise-name">${agent.name}</div><div id="mortise-sub">TheDoorPro \u00b7 ${agent.title}</div></div>
      <button id="mortise-close" aria-label="Close" style="margin-left:auto">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div id="mortise-connecting">
      <div class="mc-spin"></div>
      <div class="mc-txt">Connecting you with someone now\u2026</div>
      <div class="mc-sub">TheDoorPro client team \u00b7 available 24/7</div>
    </div>
    <div id="mortise-messages" style="display:none"></div>
    <div id="mortise-typing">
      ${monogram(agent.letter,30)}
      <div id="mortise-typing-bubble"><div class="md"></div><div class="md"></div><div class="md"></div></div>
    </div>
    <div id="mortise-input-area" style="display:none">
      <textarea id="mortise-input" rows="1" placeholder="Describe your door project..." aria-label="Message"></textarea>
      <button id="mortise-send" aria-label="Send">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
        </svg>
      </button>
    </div>
    <div id="mortise-footer">TheDoorPro \u00b7 The Gold Standard in Door Installation</div>`;
  document.body.appendChild(win);

  function renderMessages() {
    const c = document.getElementById("mortise-messages");
    c.innerHTML = "";
    messages.forEach(m => {
      const row = document.createElement("div");
      row.className = `mortise-row ${m.role}`;
      if (m.role === "assistant") {
        row.innerHTML = monogram(agent.letter,30) + `<div class="mortise-bubble">${m.content.replace(/\n/g,"<br>")}</div>`;
      } else {
        row.innerHTML = `<div class="mortise-bubble">${m.content.replace(/\n/g,"<br>")}</div>`;
      }
      c.appendChild(row);
    });
    c.scrollTop = c.scrollHeight;
  }

  function parseSubmit(text) {
    const m = text.match(/<<<SUBMIT>>>([\s\S]*?)<<<END>>>/);
    if (!m) return null;
    try { return JSON.parse(m[1].trim()); } catch { return null; }
  }
  function cleanText(text) { return text.replace(/<<<SUBMIT>>>[\s\S]*?<<<END>>>/g,"").trim(); }


async function sendEmailAlert(data, hubspotOk) {
  try {
    await emailjs.send(
      "TheDoorPro_Mortise_Alert",
      "TheDoorPro_Mortise_Email",
      {
        customer_name: (data.firstname || "") + " " + (data.lastname || ""),
        customer_phone: data.phone || "Not provided",
        customer_email: data.email || "Not provided",
        preferred_contact: data.preferred_contact_method || "Not provided",
        best_time: data.best_contact_time || "Not provided",
        service_type: data.service_type || "Not provided",
        address: (data.address || "") + " " + (data.city || ""),
        project_description: data.project_description || "Not provided",
        timeline: data.timeline || "Not provided",
        customer_notes: data.additional_customer_notes || "None",
        hubspot_status: hubspotOk ? "SUCCESS - Lead received in HubSpot" : "FAILED - Lead may not be in HubSpot, contact customer directly"
      }
    );
    console.log("Mortise email alert sent");
  } catch(e) {
    console.error("EmailJS error:", e);
  }
}

  async function submitToHubSpot(data) {
    const fields = [
      {name:"firstname",value:data.firstname},{name:"lastname",value:data.lastname},
      {name:"email",value:data.email},{name:"phone",value:data.phone},
      {name:"preferred_contact_method",value:data.preferred_contact_method},
      {name:"best_contact_time",value:data.best_contact_time},
      {name:"property_type",value:data.property_type},{name:"address",value:data.address},
      {name:"city",value:data.city},{name:"state",value:"Alberta"},
      {name:"building_age",value:data.building_age},{name:"is_owner",value:data.is_owner},
      {name:"service_type",value:data.service_type},{name:"number_of_doors",value:data.number_of_doors},
      {name:"door_location",value:data.door_location},{name:"door_type",value:data.door_type},
      {name:"supply_materials",value:data.supply_materials},{name:"measurements",value:data.measurements},
      {name:"project_description",value:data.project_description},{name:"timeline",value:data.timeline},
      {name:"additional_customer_notes",value:data.additional_customer_notes},
    ].filter(f=>f.value);
    try {
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fields,context:{pageUri:window.location.href,pageName:document.title},legalConsentOptions:{consent:{consentToProcess:true,text:"Customer consented via Mortise chat",communications:[{value:true,subscriptionTypeId:999,text:"Customer agreed to receive communications from TheDoorPro"}]}}})
      });
      return res.ok;
    } catch { return false; }
  }

  async function sendMessage() {
    const input = document.getElementById("mortise-input");
    const text = input.value.trim();
    if (!text || isLoading) return;
    messages.push({role:"user",content:text});
    input.value=""; input.style.height="auto";
    updateSendBtn(); renderMessages(); isLoading=true;
    document.getElementById("mortise-typing").classList.add("show");
    document.getElementById("mortise-messages").scrollTop=99999;
    try {
      const res = await fetch("/api/chat",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system:SYSTEM_PROMPT+`\n\nYOUR NAME FOR THIS CHAT: ${agent.name}. Sign on naturally as ${agent.name} if introducing yourself. Keep replies short.`,
          messages:messages.map(m=>({role:m.role,content:m.content}))})
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text||"Connection issue. Please call 403-473-2200.";
      const submitData = parseSubmit(raw);
      const clean = cleanText(raw);
      messages.push({role:"assistant",content:clean});
      if (submitData&&!submitted){submitted=true;const ok=await submitToHubSpot(submitData);if(ok)showToast();await sendEmailAlert(submitData,ok);}
    } catch {
      messages.push({role:"assistant",content:"Connection issue. Please call 403-473-2200 or email request@thedoorpro.ca."});
    }
    isLoading=false;
    document.getElementById("mortise-typing").classList.remove("show");
    renderMessages();
  }

  function updateSendBtn(){
    const i=document.getElementById("mortise-input"),s=document.getElementById("mortise-send");
    if(i&&i.value.trim())s.classList.add("active");else s.classList.remove("active");
  }

  function openChat(){
    isOpen=true;btn.style.display="none";win.style.display="flex";
    Object.assign(win.style,getWindowStyles());
    if(connected){
      document.getElementById("mortise-connecting").style.display="none";
      document.getElementById("mortise-messages").style.display="flex";
      document.getElementById("mortise-input-area").style.display="flex";
      renderMessages();
      setTimeout(()=>{const i=document.getElementById("mortise-input");if(i)i.focus();},200);
      return;
    }
    // first open: pick an agent, show "connecting", then reveal the chat
    agent = AGENTS[Math.floor(Math.random()*AGENTS.length)];
    document.getElementById("mortise-av").innerHTML = monogram(agent.letter,44);
    document.getElementById("mortise-name").textContent = agent.name;
    document.getElementById("mortise-sub").textContent = "TheDoorPro \u00b7 "+agent.title;
    const conn=document.getElementById("mortise-connecting");
    const msgs=document.getElementById("mortise-messages");
    const area=document.getElementById("mortise-input-area");
    conn.style.display="flex";msgs.style.display="none";area.style.display="none";
    setTimeout(()=>{
      connected=true;
      conn.style.display="none";msgs.style.display="flex";area.style.display="flex";
      renderMessages();
      const i=document.getElementById("mortise-input");if(i)i.focus();
    }, 1600 + Math.random()*900);
  }
  function closeChat(){isOpen=false;win.style.display="none";btn.style.display="flex";}

  window.addEventListener("resize",()=>{
    if(isOpen)Object.assign(win.style,getWindowStyles());
    const p=isMobile()?"16px":"24px";
    btn.style.bottom=p;btn.style.right=p;
    if(isOpen){const m=document.getElementById("mortise-messages");if(m)setTimeout(()=>{m.scrollTop=m.scrollHeight;},100);}
  });

  btn.addEventListener("click",openChat);
  document.getElementById("mortise-close").addEventListener("click",closeChat);
  document.getElementById("mortise-send").addEventListener("click",sendMessage);
  document.getElementById("mortise-input").addEventListener("keydown",e=>{
    if(e.key==="Enter"&&!e.shiftKey&&window.innerWidth>600){e.preventDefault();sendMessage();}
  });
  document.getElementById("mortise-input").addEventListener("input",()=>{
    const i=document.getElementById("mortise-input");
    i.style.height="auto";i.style.height=Math.min(i.scrollHeight,100)+"px";updateSendBtn();
  });

  let touchStartY=0;
  win.addEventListener("touchstart",e=>{touchStartY=e.touches[0].clientY;},{passive:true});
  win.addEventListener("touchend",e=>{if(e.changedTouches[0].clientY-touchStartY>80&&isMobile())closeChat();},{passive:true});

  // ── Subtle invite teaser (professional, no gimmick) ──
  const teaserEl = document.createElement("div");
  teaserEl.id = "mortise-teaser";
  teaserEl.style.cssText = "position:fixed;max-width:230px;background:#fff;color:#0F1E35;padding:11px 14px;border-radius:14px 14px 4px 14px;font-size:13.5px;font-family:'DM Sans',sans-serif;line-height:1.45;box-shadow:0 12px 30px rgba(15,30,53,0.22);border:1px solid #e4e0d8;z-index:2147483645;opacity:0;pointer-events:none;transition:opacity .35s,transform .35s;transform:translateY(8px);";
  document.body.appendChild(teaserEl);
  function positionTeaser(){
    const r=btn.getBoundingClientRect();
    teaserEl.style.bottom=(window.innerHeight-r.top+12)+"px";
    teaserEl.style.right=(window.innerWidth-r.right+0)+"px";
  }
  function showTeaser(msg){
    if(isOpen||isMobile())return;
    teaserEl.textContent=msg;positionTeaser();
    teaserEl.style.opacity="1";teaserEl.style.transform="translateY(0)";
    setTimeout(()=>{teaserEl.style.opacity="0";teaserEl.style.transform="translateY(8px)";},6500);
  }
  setTimeout(()=>showTeaser("\u{1F44B} Questions about your door? We're online \u2014 chat with us anytime."),6000);
  setTimeout(()=>{if(!isOpen)showTeaser("Need a free estimate? We can get started in about 2 minutes.");},32000);

  renderMessages();
})();
