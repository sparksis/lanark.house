"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">Contact</h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        Have questions about the home-buying process or want to share your own
        builder experience? Get in touch.
      </p>

      {status === "sent" ? (
        <div className="bg-[#52c41a]/10 border border-[#52c41a]/30 rounded-lg p-6 text-center">
          <p className="text-lg font-medium">Message sent!</p>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-3 py-2 bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] resize-y"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-[#e85050]">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
