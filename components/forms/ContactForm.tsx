"use client";

import { useState } from "react";
import { company } from "@/content/site";

/**
 * Composes a structured email in the visitor's mail client. Swap for a
 * provider (Resend, Formspree) via a server action when one is chosen —
 * the markup and validation stay the same.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full border-b border-ink/25 bg-transparent py-4 font-serif text-xl font-light outline-none transition-colors placeholder:text-ash/60 focus:border-bronze";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <label className="block">
        <span className="eyebrow text-bronze">Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about the operation, the platform, the deadline."
          className={`${inputClasses} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-12 inline-flex items-center gap-4 bg-ink px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bronze"
      >
        Send enquiry
      </button>
    </form>
  );
}
