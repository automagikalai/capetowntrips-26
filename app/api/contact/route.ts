import { site } from "@/lib/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const s = (key: string, max = 300) => String(body[key] ?? "").trim().slice(0, max);

  // Spam trap
  if (s("website")) return Response.json({ ok: true });

  const firstName = s("firstName", 80);
  const surname = s("surname", 80);
  const email = s("email", 160);
  const message = s("message", 2000);
  const consent = s("consent");

  if (!firstName || !surname || !EMAIL.test(email) || !message || !consent) {
    return Response.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const text = [
    `New contact message from: ${firstName} ${surname}`,
    "",
    `Email: ${email}`,
    `POPIA consent: Yes`,
    "",
    "Message:",
    message,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM;
  const to = process.env.ENQUIRY_TO ?? site.email;

  if (!key || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.log("\n--- Contact message (email not configured, not sent) ---\n" + text + "\n");
      return Response.json({ ok: true, dev: true });
    }
    console.error("Contact form: RESEND_API_KEY / ENQUIRY_FROM are not set.");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Contact message from ${firstName} ${surname}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact email failed:", res.status, await res.text());
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
