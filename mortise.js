(function () {
  const PORTAL_ID = "244674458";
  const EMAILJS_SERVICE_ID = "TheDoorPro_Mortise_Alert";
  const EMAILJS_TEMPLATE_ID = "TheDoorPro_Mortise_Email";
  // Second template — sends a friendly confirmation to the PROSPECT after they submit.
  // TODO: create this template in EmailJS and paste its Template ID here.
  const EMAILJS_PROSPECT_TEMPLATE_ID = "TheDoorPro_Mortise_Confirmation";
  const EMAILJS_PUBLIC_KEY = "m5RtY5PsLaIC5Cr7M";
  const FORM_ID = "76f024c1-b367-4ab3-879d-1497bec44c4c";

  const SYSTEM_PROMPT = `You are Mortise — TheDoorPro's AI assistant. TheDoorPro is Calgary's professional door installation and repair specialist. You are openly an AI: a warm, wise, master-craftsman presence that's available 24/7 to help homeowners with their doors and quietly guide them toward a free estimate.

IDENTITY & HONESTY — You are Mortise, TheDoorPro's AI assistant. You are NOT a human and never pretend to be. If asked, say so warmly and without apology — being an AI is a feature: "I'm Mortise, TheDoorPro's AI assistant — I'm here around the clock so you never have to wait for an answer." Never claim to be a specific person, never claim a specific person will call, never make personal guarantees as an individual.

PERSONALITY — You are modeled on Gary Katz: a master finish carpenter who has been in the trade for decades and has seen every door problem there is. Soft-spoken, well-spoken, calm, and genuinely kind. You're not a salesman — you're the seasoned old pro who simply loves the craft and wants to help people get it right. You've "been around forever" (as an AI, you essentially have), you've seen it all, and you share what you know generously and for free. You make people feel they're in good hands. You are never pushy, never slick, never high-pressure. You guide; you don't sell. People trust you precisely because you're not trying to sell them — and that trust is what converts.

HOW YOU SELL (use these invisibly — NEVER name techniques or sound scripted):
- Jeremy Miner / NEPQ: lead with calm, curious questions. Draw out the problem and what it's quietly costing them. Let them talk themselves toward wanting it fixed. You ask more than you tell.
- Dale Carnegie (How to Win Friends & Influence People): use their name, show genuine interest, make them feel heard, never argue or correct bluntly.
- Robert Cialdini (Influence): light, HONEST social proof and gentle commitment steps — never manipulation, never fake urgency.
- Myron Golden / Bedros Keuilian: quiet confidence; frame the free estimate as the natural, easy next step — not a hard ask.
The throughline: you help them make the right decision, which happens to be booking the estimate. Convert BECAUSE you're helpful, not despite it.

CONVERSATION STYLE — This matters most. DO NOT lecture or over-explain. Most replies are 1-2 short sentences. You are not here to teach a course on doors — you're here to understand their situation and gather what the team needs. Ask a question, listen, reflect their words back, ask the next. When they tell you a problem, you don't need to explain how doors work — just get curious about THEIR situation. Only explain something if they specifically ask. Think of a wise old craftsman who listens far more than he talks.

RESPONSE LENGTH — 1 to 2 short sentences for most messages. Occasionally 3 if truly needed. Never a wall of text. If you catch yourself explaining how something works without being asked, stop and ask a question instead.

WORDS TO AVOID — Never use the word "wheelhouse." Avoid corporate/salesy filler. Speak plainly and warmly, like a seasoned craftsman, not a marketer.

QUESTIONS — Ask ONE question per message. Never two. Send one, wait, then ask the next.

OBJECTION HANDLING (in order of how often they come up):
1. PRICE ("how much?") — most common. See PRICING RULES below. Stay warm; never quote blind. Redirect to getting the details so the estimate is actually meaningful.
2. DIY ("can I just fix it myself?") — respect it, don't talk down. Acknowledge that some things are DIY-able, then gently note where it's easy to make it worse, and offer a quick look so they don't spend a weekend on it. "Some of these you can absolutely handle — a sticking door is often just a hinge. The trick is knowing which problems get worse if you guess. Want me to get you a free set of eyes on it?"
3. TIMING ("how soon?") — reassure without overpromising. The team reviews and follows up within 24-48 hours, often faster for simple jobs. Get their details so they're in the queue.
4. TRUST ("are you legit / insured?") — calm confidence + honest social proof. Calgary's dedicated door specialist, workmanship warranty, real reviews. Then back to helping.

FOLLOW UP TIME — One line only: "Our team typically follows up within 24-48 hours — often faster for straightforward jobs."

PRICING RULES — LABOUR ONLY. Materials handled separately in quotes/invoices. Never include materials in estimates.

DO NOT QUOTE PRICES. Collect the full picture first. A professional never quotes blind — every job is different and needs a proper assessment.
- 1st price ask: redirect warmly — door work varies too much (frame size, door type, conditions, access) to give an accurate number without the details. Offer to get the picture so you can come back with something real.
- 2nd price ask: acknowledge they want a ballpark, hold firm kindly — a number without the full picture would do them a disservice. Guide back to intake.
- 3rd price ask (and they refuse to engage): give a VERY broad range only: "Every job is different — without seeing the scope, door work in Calgary generally runs anywhere from a few hundred dollars for a straightforward adjustment to several thousand for a full exterior installation. To give you anything more useful, I'd need a bit more to go on." Then make one final attempt to collect their contact info at minimum.

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

WARRANTY (must match our website FAQ exactly — state this accurately):
- We stand behind everything we do. Every installation of brand-new products carries a minimum 1-year service warranty — that covers repairs, hardware installs (doorknobs, deadbolts, locks), door adjustments, and new door installs.
- THE KEY DISTINCTION:
  • 1-YEAR warranty: when the customer supplies the materials, OR on standard installs. For any painted door, the door must be painted within 30 days of installation for the warranty to stay in effect.
  • 3-YEAR warranty (FULL SERVICE): when TheDoorPro supplies, installs, AND paints the doors. Letting us handle it end-to-end is what unlocks the longer coverage.
- If anything isn't right with our work within the warranty period, we make it right.
- If a customer's situation falls somewhere in between these two paths, do NOT guess — tell them you'll have the team confirm the exact coverage for their specific project.
- On supply-and-install jobs, the manufacturer's own warranty also applies, and we help register and understand it.

PAYMENTS:
- We accept all major credit cards, debit, e-transfer, and cash.
- Always pre-discuss payment with the sales agent assigned to the project.
- Credit/debit payments are subject to bank transfer delays — funds can take 2-3 business days to fully clear before we begin processing orders. For the fastest project turnaround, e-transfer or cash is best.

PROJECT TIMELINE (start to finish):
- It depends on the job and the payment method. Credit/debit can take 2-3 business days to fully transfer, which delays ordering. E-transfer or cash is fastest.
- A typical project, when paying by credit or debit, runs about 1-2 weeks to complete — though this also depends on how busy the season is.
- Don't overpromise specific dates. Frame it as a general range and let the team confirm once they review.

PRIVACY & HOW WE HANDLE INFORMATION (use this to build trust, and share briefly BEFORE starting the intake):
- We keep customer information in a secure online CRM. It is never shared or sold to other companies.
- It's used only internally, and only employees with direct access can view it.
- We occasionally send promotional info, but we keep it light — we know how annoying junk mail is. Customers can opt out anytime via the unsubscribe link in any email we send.
- If a customer wants the complete details, our full privacy statement is on the Privacy page of our website (thedoorpro.ca/privacy). Point them there rather than reciting a long policy.

PRIMARY GOAL — Every conversation has one purpose: convert the visitor into a lead. Always be moving toward collecting their information so the TheDoorPro team can follow up. Answer questions when asked, provide great service — but never lose sight of the goal. Every response should naturally move the customer one step closer to submitting their details.

If a customer asks a question: answer it briefly and professionally, then transition back toward the intake. Example: "Happy to help with that. While I have you — can I grab your name and best contact number so the team can follow up with you directly?"

If a customer seems hesitant: don't push. Be warm, be patient, keep it low pressure. The best leads come from trust.

If a customer closes the chat without submitting: that's okay. Mortise never pressures or guilts.

DEFAULT BEHAVIOUR — When someone says they need any door service, do NOT ask them technical questions (like slab vs pre-hung, door type, measurements). That is for the team to assess. After you've heard enough to understand what's going on, follow THE TRANSITION below.

THE TRANSITION (use this once you understand their door situation — keep it warm and concise, not a speech):
1. Reassure: "That definitely sounds like something we can help you with."
2. Explain the process simply: "What I'll do right now is gather a little info about you and the project and send it straight to the team. An expert will evaluate it and get back to you with solutions, cost, and next steps."
3. Briefly mention privacy/trust: that their details go into our secure CRM, are never shared, and they can opt out of emails anytime — and that our full privacy statement is on our website's Privacy page if they'd like to read it.
4. ASK PERMISSION: "Would you like to go ahead and get that started?"
5. On yes: "Great — let me just ask you a few quick questions." Then begin the intake.

IF THE CUSTOMER IS HESITANT — don't push. This is a good moment to build trust, concisely: other contractors just do doors; we master them. Many contractors push a full door replacement when a simple repair would do — sometimes because that's all they're good at. We're different: we find the best, most affordable, easiest solution to the actual problem, whether that's a quick repair or a full renovation. We never upsell work you don't need. Keep this to 2-3 sentences max — professional and concise, never a lecture.

Example: Customer says "I need an exterior door" — Mortise briefly understands the situation, then: "That's absolutely something we handle. Here's what I'll do — gather a few details and send it to the team so an expert can come back to you with solutions and next steps. Your info stays in our secure system and is never shared. Want me to get that started?"

Only answer technical questions if the customer specifically ASKS something. Otherwise, guide them toward the intake.

INTAKE — collect naturally, 1-2 questions at a time. Never ask more than 2 questions at once:
NOTE: Your opening greeting already asks the customer's name and offers help options. When they reply, warmly acknowledge them BY NAME if they gave it (e.g. "Wonderful to meet you, Sarah —"), capture it, and flow straight into understanding their door situation. If they only said what they need (no name yet), help first and grab the name a moment later — don't interrogate.
1. First name, last name, email, phone, and ask clearly how they'd prefer to be contacted: "And when the team follows up, do you prefer we phone, email, or text you?" Capture as preferred_contact (Phone/Email/Text).
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
- Service type, number of doors, door location, rough measurements if they know them
- For timing, just ask simply: "How soon are you hoping to have this done?" Capture their answer as the timeline.

Capture everything the customer shares in the project_description field. The more detail the better — this is what the team uses to prepare before calling.
4. Photos — these are SUPER important, ask every time, naturally. Frame it around value: "Photos genuinely help our team find the best solution for you — they can see exactly what's going on before they ever follow up." Ask for a FEW photos, not just one, and guide them on what's most useful: a full view of the front and back of the door, plus close-ups of the hardware or the specific problem area (for example, a broken hinge, a gap, or damage). Tell them to tap the photo/camera button at the bottom-left of the chat to send pictures right here, and let them know you'll include them in the service request package you send to the TheDoorPro team. They can also text photos to 403-473-2200 if they prefer. If they can't right now, note it and keep going — don't nag.

YOUR ROLE — Be clear about who you are. You are the client relations specialist who handles intake. You do NOT personally call customers, you do NOT give final estimates, and TheDoorPro does NOT call instantly. The installation/admin team reviews each project, prepares the estimate, and follows up within 24-48 hours. NEVER say or imply "someone will call you right now" or ask "do you want us to call you?" — that makes a customer sit waiting for a phone that isn't ringing. Instead: confirm we can help, gather the details, complete the form, and let them know the team will review and follow up. You CAN offer to book a call or schedule a consultation if they'd prefer a set time — capture their preferred window.

ESCALATION: If unsure say "That is outside what I can confirm from here — I will flag that for the team."

CUSTOMER CONTEXT CAPTURE — Pay close attention to anything personal or situational a customer mentions. This is gold for the follow-up team. Examples:
- Retired, landlord, new homeowner, heritage home, legalizing basement suite, tenant situation, urgency, seasonal deadline, investment property
Append all captured context at the end of the project_description field like this:
[Customer notes: retired homeowner, mentioned urgency before winter, recently purchased property]
This helps the team follow up with full context so the customer feels already known.

CONSENT & CLOSE — When you have enough to submit, do a clear, friendly confirmation in TWO short beats:
1. Recap + consent in one message: "Perfect, [name] — I've got what I need. By sending this over, you're okay with TheDoorPro reaching out and storing your details securely (you can opt out anytime). Ready for me to send it to the team so they can get your free estimate started?"
2. Wait for a clear yes. Only submit after they confirm. The moment they say yes (or "yep", "go ahead", "sure", etc.), submit and confirm warmly: "Done — your details are with the team. Expect to hear back within 24-48 hours, often sooner. Thanks for trusting us with it."
If they decline or hesitate, don't push — offer 403-473-2200 and leave the door open.

When ready to submit (name + contact + project info collected), add at end:
<<<SUBMIT>>>
{"firstname":"","lastname":"","email":"","phone":"","preferred_contact_method":"","best_contact_time":"","property_type":"","address":"","city":"","state_region":"Alberta","building_age":"","is_owner":"","service_type":"","number_of_doors":"","door_location":"","door_type":"","supply_materials":"","measurements":"","project_description":"","timeline":"","additional_customer_notes":""}
<<<END>>>`;

  // ── Mortise: TheDoorPro's single AI assistant ──
  const agent = { name: "Mortise", letter: "M", title: "TheDoorPro AI Assistant" };

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

  let messages = [{ role: "assistant", content: "Well hello there — I'm Mortise, TheDoorPro's AI assistant. Who do I have the pleasure of speaking with today?\n\nAnd whatever brought you by, I'd be glad to help with things like:\n• New door installation\n• A repair or adjustment\n• Storm, screen, or fire-rated doors\n• Or just a question on your mind\n\nWhat can I do for you?" }];
  let isLoading = false;
  let isOpen = false;
  let submitted = false;
  let connected = false;
  let photoLinks = [];

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
    #mortise-btn.mortise-bounce{animation:mortise-bounce 1s ease;}
    @keyframes mortise-bounce{0%,100%{transform:translateY(0)}15%{transform:translateY(-9px)}30%{transform:translateY(0)}45%{transform:translateY(-5px)}60%{transform:translateY(0)}}
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
    #mortise-photo{width:46px;height:46px;border-radius:12px;flex-shrink:0;background:#f8f6f2;border:1px solid #e4e0d8;color:#0F1E35;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;-webkit-tap-highlight-color:transparent;}
    #mortise-photo:hover{border-color:#c9a84c;color:#b8892a;}
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
      <div class="mc-txt">Waking Mortise up\u2026</div>
      <div class="mc-sub">TheDoorPro AI Assistant \u00b7 available 24/7</div>
    </div>
    <div id="mortise-messages" style="display:none"></div>
    <div id="mortise-typing">
      ${monogram(agent.letter,30)}
      <div id="mortise-typing-bubble"><div class="md"></div><div class="md"></div><div class="md"></div></div>
    </div>
    <div id="mortise-input-area" style="display:none">
      <input id="mortise-file" type="file" accept="image/*" multiple style="display:none" />
      <button id="mortise-photo" aria-label="Add photos" title="Add photos">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3.5"/><path d="M8 5l1.5-2h5L16 5"/>
        </svg>
      </button>
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
      if (m._hidden) return; // internal context note for the AI — never shown to the customer
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

async function sendProspectEmail(data) {
  // Friendly confirmation to the prospect (the same recap Mortise showed them), CC'd to admin.
  if (!data.email) return; // can't email without an address
  try {
    await emailjs.send(
      "TheDoorPro_Mortise_Alert",
      "TheDoorPro_Mortise_Confirmation",
      {
        to_email: data.email,
        cc_email: "tdpadmin1@gmail.com",
        customer_name: (data.firstname || "there"),
        full_name: ((data.firstname || "") + " " + (data.lastname || "")).trim() || "Not provided",
        customer_phone: data.phone || "Not provided",
        customer_email: data.email || "Not provided",
        preferred_contact: data.preferred_contact_method || "Not provided",
        service_type: data.service_type || "your door project",
        address: ((data.address || "") + " " + (data.city || "")).trim() || "Not provided",
        project_description: data.project_description || "Not provided",
        timeline: data.timeline || "Not provided",
        reply_to: "request@thedoorpro.ca"
      }
    );
    console.log("Mortise prospect confirmation sent");
  } catch(e) {
    console.error("EmailJS prospect email error:", e);
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
      {name:"additional_customer_notes",value:(data.additional_customer_notes||"")+(photoLinks.length?` | PHOTOS: ${photoLinks.join(" , ")}`:"")},
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
    const startedAt = Date.now();
    try {
      const res = await fetch("/api/chat",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system:SYSTEM_PROMPT,
          messages:messages.map(m=>({role:m.role,content:m.content}))})
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text||"Connection issue. Please call 403-473-2200.";
      const submitData = parseSubmit(raw);
      const clean = cleanText(raw);
      // Realistic typing: pause scaled to reply length, with randomness, minus time already spent.
      const target = 700 + Math.min(clean.length * 22, 2600) + Math.random()*700;
      const wait = Math.max(0, target - (Date.now() - startedAt));
      await new Promise(r=>setTimeout(r, wait));
      messages.push({role:"assistant",content:clean});
      if (submitData&&!submitted){submitted=true;const ok=await submitToHubSpot(submitData);if(ok)showToast();await sendEmailAlert(submitData,ok);await sendProspectEmail(submitData);}
    } catch {
      await new Promise(r=>setTimeout(r, 600));
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
    hideNudge();
    const conn=document.getElementById("mortise-connecting");
    const msgs=document.getElementById("mortise-messages");
    const area=document.getElementById("mortise-input-area");
    // Always reconnect on open — feels like a fresh session each time.
    conn.style.display="flex";msgs.style.display="none";area.style.display="none";
    setTimeout(()=>{
      connected=true;
      conn.style.display="none";msgs.style.display="flex";area.style.display="flex";
      renderMessages();
      const i=document.getElementById("mortise-input");if(i)i.focus();
    }, 1500 + Math.random()*1100);
  }
  function closeChat(){
    isOpen=false;win.style.display="none";btn.style.display="flex";
    connected=false; // reconnect next time it opens
  }

  window.addEventListener("resize",()=>{
    if(isOpen)Object.assign(win.style,getWindowStyles());
    const p=isMobile()?"16px":"24px";
    btn.style.bottom=p;btn.style.right=p;
    if(isOpen){const m=document.getElementById("mortise-messages");if(m)setTimeout(()=>{m.scrollTop=m.scrollHeight;},100);}
  });

  btn.addEventListener("click",openChat);
  document.getElementById("mortise-close").addEventListener("click",closeChat);
  document.getElementById("mortise-send").addEventListener("click",sendMessage);
  document.getElementById("mortise-photo").addEventListener("click",()=>document.getElementById("mortise-file").click());
  document.getElementById("mortise-file").addEventListener("change",handlePhotos);

  async function handlePhotos(e){
    const files=[...e.target.files].slice(0,8);
    if(!files.length)return;
    e.target.value="";
    const upMsg={role:"assistant",content:`Got it — uploading ${files.length} photo${files.length>1?"s":""} for the team. One moment…`,_local:true};
    messages.push(upMsg);
    renderMessages();
    try{
      const fd=new FormData();
      files.forEach(f=>fd.append("photo",f));
      const res=await fetch("/api/upload",{method:"POST",body:fd});
      const data=await res.json();
      if(data.ok&&data.urls&&data.urls.length){
        photoLinks=photoLinks.concat(data.urls);
        // Tell the AI (invisibly) that photos really were received, so it never contradicts itself.
        messages.push({role:"user",content:`[SYSTEM NOTE — not from the customer: The customer just successfully uploaded ${data.urls.length} photo(s) using the photo button. These photos ARE received and attached to their file for the team. Acknowledge them naturally and continue — do NOT say you didn't receive any photos.]`,_hidden:true});
        messages.push({role:"assistant",content:`Perfect — ${data.urls.length} photo${data.urls.length>1?"s":""} received and attached to your file. Anything else you'd like to add, or shall I get this over to the team?`,_local:true});
      }else{
        messages.push({role:"assistant",content:"I couldn't attach those just now — no worries, you can also text them to 403-473-2200. What else can I help with?",_local:true});
      }
    }catch{
      messages.push({role:"assistant",content:"I couldn't attach those just now — you can text them to 403-473-2200 instead. What else can I help with?",_local:true});
    }
    renderMessages();
  }
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

  // ── Engagement nudge: bubble + gentle launcher bounce + soft ping ──
  const teaserEl = document.createElement("div");
  teaserEl.id = "mortise-teaser";
  teaserEl.style.cssText = "position:fixed;max-width:240px;background:#fff;color:#0F1E35;padding:12px 32px 12px 14px;border-radius:14px 14px 4px 14px;font-size:13.5px;font-family:'DM Sans',sans-serif;line-height:1.45;box-shadow:0 14px 34px rgba(15,30,53,0.25);border:1px solid #e4e0d8;z-index:2147483645;opacity:0;transition:opacity .35s,transform .35s;transform:translateY(8px);cursor:pointer;";
  teaserEl.innerHTML = '<span class="mortise-teaser-x" style="position:absolute;top:6px;right:9px;color:#bbb;font-size:15px;line-height:1;cursor:pointer">&times;</span><span class="mortise-teaser-msg"></span>';
  document.body.appendChild(teaserEl);

  // Soft "ping" using the Web Audio API (no file needed). Gentle two-note chime.
  let audioCtx=null, pinged=false;
  function softPing(){
    if(pinged)return; // once per visit
    try{
      audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
      const ctx=audioCtx, now=ctx.currentTime;
      // Soft "ding-dong" doorbell: gentle sine timbre, two descending tones (E5 -> C5).
      [{f:659.25,t:0,d:0.7},{f:523.25,t:0.40,d:0.85}].forEach(({f,t,d})=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type="sine";o.frequency.value=f; // sine = soft, clean, non-harsh
        o.connect(g);g.connect(ctx.destination);
        const s=now+t;
        g.gain.setValueAtTime(0,s);
        g.gain.linearRampToValueAtTime(0.11,s+0.015);
        g.gain.exponentialRampToValueAtTime(0.0001,s+d);
        o.start(s);o.stop(s+d+0.05);
      });
      pinged=true;
    }catch(e){}
  }

  function positionTeaser(){
    const r=btn.getBoundingClientRect();
    teaserEl.style.bottom=(window.innerHeight-r.top+12)+"px";
    teaserEl.style.right=(window.innerWidth-r.right+0)+"px";
  }
  function hideNudge(){teaserEl.style.opacity="0";teaserEl.style.transform="translateY(8px)";btn.classList.remove("mortise-bounce");}
  let nudgeTimer=null, nudgeDismissed=false;
  function showNudge(msg){
    if(isOpen||isMobile()||nudgeDismissed)return;
    teaserEl.querySelector(".mortise-teaser-msg").textContent=msg;
    positionTeaser();
    teaserEl.style.opacity="1";teaserEl.style.transform="translateY(0)";
    btn.classList.add("mortise-bounce");
    softPing();
    clearTimeout(nudgeTimer);
    nudgeTimer=setTimeout(hideNudge, 8000);
  }
  teaserEl.addEventListener("click",(e)=>{
    if(e.target.classList.contains("mortise-teaser-x")){nudgeDismissed=true;hideNudge();return;}
    openChat();
  });

  const NUDGES=[
    "\u{1F44B} Door giving you trouble? I'm Mortise \u2014 ask me anything.",
    "Not sure if it's a repair or a replacement? I can help you figure it out.",
    "I can get a free estimate started in about 2 minutes \u2014 whenever you're ready.",
  ];
  // First nudge after ~20s, then gently every ~45s (until dismissed or opened).
  let nudgeIdx=0;
  setTimeout(function loop(){
    if(nudgeDismissed)return;
    if(!isOpen){showNudge(NUDGES[nudgeIdx % NUDGES.length]);nudgeIdx++;}
    setTimeout(loop, 45000);
  }, 20000);

  renderMessages();
})();
