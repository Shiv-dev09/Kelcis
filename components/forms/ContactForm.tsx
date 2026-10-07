"use client";

import { useState } from "react";
import { company } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        setError(data.error ?? `That did not send. Write to ${company.email}.`);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(
        `That did not send. Check your connection, or write to ${company.email}.`,
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-xl" role="status">
        <p className="eyebrow text-bronze">Enquiry sent</p>
        <p className="mt-6 font-serif text-2xl font-light leading-snug">
          It is with us. You will hear back within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-arrow mt-10 font-sans text-sm font-bold uppercase tracking-[0.16em] text-ash transition-colors hover:text-bronze"
        >
          Send another
        </button>
      </div>
    );
  }

  const sending = status === "sending";
  const inputClasses =
    "w-full border-b border-ink/25 bg-transparent py-4 font-serif text-xl font-light outline-none transition-colors placeholder:text-ash/60 focus:border-bronze disabled:opacity-60";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl" noValidate>
      <label className="block">
        <span className="eyebrow text-bronze">Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          disabled={sending}
          placeholder="Your name"
          className={inputClasses}
        />
      </label>

      <label className="mt-10 block">
        <span className="eyebrow text-bronze">Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          disabled={sending}
          placeholder="name@company.com"
          className={inputClasses}
        />
      </label>

      <label className="mt-10 block">
        <span className="eyebrow text-bronze">What isn&rsquo;t working?</span>
        <textarea
          name="message"
          required
          rows={4}
          disabled={sending}
          placeholder="Tell us about the operation, the platform, the deadline."
          className={`${inputClasses} resize-none`}
        />
      </label>

      {/* Honeypot. Hidden from people and assistive tech; bots fill it in. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Organisation
          <input
            type="text"
            name="organisation"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-12 inline-flex items-center gap-4 bg-ink px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bronze disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending" : "Send enquiry"}
      </button>

      <p aria-live="polite" className="sr-only">
        {sending ? "Sending your enquiry" : ""}
      </p>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 font-sans text-sm leading-relaxed text-clay"
        >
          {error}
        </p>
      )}
    </form>
  );
}
