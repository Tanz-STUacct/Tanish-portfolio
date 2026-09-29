"use client";

import { useState } from "react";
import { CONTACT, SITE } from "@/data/site";
import { Section, SectionHeader } from "./SectionHeader";

/**
 * Submission strategy:
 *  - If NEXT_PUBLIC_WEB3FORMS_KEY is set, the form POSTs to Web3Forms and the
 *    message lands in your inbox without any backend.
 *  - If it is not set, the form falls back to opening the visitor's mail client
 *    with the message pre-filled, so the site still works before you set it up.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full border border-rule bg-canvas px-3.5 py-2.5 text-body text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!WEB3FORMS_KEY) {
      const body = `From: ${name} <${email}>\n\n${message}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject || "Enquiry from your portfolio",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject: subject || "Enquiry from your portfolio",
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <SectionHeader
        index={CONTACT.index}
        eyebrow={CONTACT.eyebrow}
        headingNode={
          <>
            {CONTACT.headingLead}
            <span className="text-brass">{CONTACT.headingAccent}</span>
            {CONTACT.headingTail}
          </>
        }
      />

      <p className="mb-10 max-w-2xl text-body-lg text-ink-soft">
        {CONTACT.intro}
      </p>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* ---- direct details ---- */}
        <div className="border border-rule bg-surface p-6 lg:col-span-5">
          <span className="spec mb-4 block !text-brass">
            {CONTACT.directLabel}
          </span>
          <dl className="space-y-4">
            {CONTACT.fields.map((field, i) => (
              <div
                key={field.key}
                className={i > 0 ? "border-t border-rule pt-4" : ""}
              >
                <dt className="spec">{field.key}</dt>
                <dd className="mt-1 text-body break-words">
                  {field.href ? (
                    <a
                      href={field.href}
                      className="text-ink underline underline-offset-4 transition-colors hover:text-brass"
                    >
                      {field.value}
                    </a>
                  ) : (
                    field.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- enquiry form ---- */}
        <form
          onSubmit={handleSubmit}
          className="border border-rule bg-surface p-6 md:p-8 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="mt-4">
            <Field
              label="Subject"
              name="subject"
              placeholder="Role, project or enquiry"
            />
          </div>

          <div className="mt-4">
            <label className="spec mb-1 block" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Details of the role, proposal or enquiry…"
              className={`${FIELD} resize-y`}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="tracked border border-transparent bg-ink px-6 py-3.5 text-canvas transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>

            {status === "sent" ? (
              <p className="text-body text-brass" role="status">
                Thanks — your message has been sent.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-body text-ink-soft" role="status">
                Something went wrong. Email me directly at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brass underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="spec mb-1 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className={FIELD}
      />
    </div>
  );
}
