"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your name.";
  if (!email.trim()) errors.email = "Enter your email address.";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email, like name@example.com.";
  if (message.trim().length < 10) errors.message = "Write at least 10 characters so we understand your project.";
  return errors;
}

const fieldClass =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-cobalt dark:bg-night-2 dark:focus:border-mint";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "sent") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 800);
  };

  const borderFor = (field) =>
    errors[field] ? "border-coral" : "border-ink/20 dark:border-fog/20";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Tell us about your project
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/70 dark:text-fog/70">
            Share a few details and we will reply within two working days.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${fieldClass} ${borderFor("name")}`}
            />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-coral">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${fieldClass} ${borderFor("email")}`}
            />
            {errors.email && <p id="email-error" className="mt-1 text-sm text-coral">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} ${borderFor("message")}`}
            />
            {errors.message && <p id="message-error" className="mt-1 text-sm text-coral">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-cobalt disabled:opacity-60 sm:w-auto dark:bg-fog dark:text-night dark:hover:bg-mint"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <div role="status" aria-live="polite">
            {status === "sent" && (
              <p className="rounded-xl bg-mint px-4 py-3 font-medium text-ink">
                Message sent. We will reply within two working days.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
