import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * TEMPORARY. Reports whether the contact form's configuration reaches the
 * running function. Returns presence and length only — never the secret.
 * Delete this route once delivery is confirmed working.
 */
export function GET() {
  const key = process.env.RESEND_API_KEY;

  return NextResponse.json({
    vercelEnv: process.env.VERCEL_ENV ?? "(not on vercel)",
    keyPresent: typeof key === "string" && key.length > 0,
    keyLength: key?.length ?? 0,
    // "re_" is Resend's public key prefix — identifies format, not the secret.
    keyPrefix: key ? key.slice(0, 3) : null,
    keyHasWhitespace: key ? key !== key.trim() : false,
    fromOverride: process.env.CONTACT_FROM_EMAIL ?? "(using default)",
    toOverride: process.env.CONTACT_TO_EMAIL ?? "(using default)",
  });
}
