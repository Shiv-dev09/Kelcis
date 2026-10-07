import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/content/site";

export const runtime = "nodejs";

/**
 * Sends from a dedicated subdomain so verifying it in Resend never touches
 * the DNS that delivers mail to hello@kelcis.com.
 */
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Kelcis <website@send.kelcis.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? company.email;

const GENERIC_FAILURE = `That did not send. Try again, or write to ${company.email} directly.`;

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot — hidden from people, usually filled by bots. */
  organisation?: unknown;
};

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 400 });
  }

  // Accept silently so a bot gets no signal about what gave it away.
  if (asText(body.organisation)) {
    return NextResponse.json({ ok: true });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const message = asText(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Every field is needed before this can send." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Check the email address — we reply to it." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "That message is longer than this form takes. Email it instead." },
      { status: 400 },
    );
  }

  // Checked after validation so bad input still gets a useful message.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing — the contact form cannot send.");
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 500 });
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Enquiry from ${name}`,
      text: `${message}\n\n—\n${name}\n${email}`,
    });

    if (error) {
      console.error("Resend rejected the enquiry:", error);
      return NextResponse.json({ error: GENERIC_FAILURE }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (cause) {
    console.error("Contact form failed:", cause);
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 502 });
  }
}
