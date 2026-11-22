import { site } from "@/lib/site";
import { getTour } from "@/lib/tours";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const s = (key: string, max = 300) => String(body[key] ?? "").trim().slice(0, max);

  // Spam trap: bots fill the hidden field. Pretend it worked.
  if (s("website")) return Response.json({ ok: true });

  const tour = getTour(s("tourSlug", 80));
  const name = s("name", 120);
  const email = s("email", 160);
  const phone = s("phone", 40);
  const guests = Number(s("guests", 4));

  if (!tour || !name || !EMAIL.test(email) || phone.length < 6 || !(guests >= 1 && guests <= 50)) {
    return Response.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const text = [
    `New enquiry for: ${tour.title}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Travelling from: ${s("country", 80) || "-"}`,
    `Preferred date: ${s("date", 20) || "-"}`,
    `Guests: ${guests}`,
    `Occasion: ${s("occasion", 40) || "-"}`,
    `Contact by: ${s("contactMethod", 20)}`,
    `Best time to call (SAST): ${s("callTime", 20)}`,
    "",
    "Message:",
    s("message", 1500) || "-",
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM;
  const to = process.env.ENQUIRY_TO ?? site.email;

  if (!key || !from) {
    // No email service set up yet. In development we log it so you can test the form.
    if (process.env.NODE_ENV !== "production") {
      console.log("\n--- Enquiry (email not configured, not sent) ---\n" + text + "\n");
      return Response.json({ ok: true, dev: true });
    }
    // In production we refuse rather than silently lose an enquiry.
    console.error("Enquiry form: RESEND_API_KEY / ENQUIRY_FROM are not set.");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Enquiry: ${tour.title} (${name})`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Enquiry email failed:", res.status, await res.text());
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
