"use client";

import { useState, useRef } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null); // 👈 FIX: Form reference

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      const data = await res.json();
      
      if (!res.ok || data.ok !== true) {
        console.error("API Error:", data);
        throw new Error(data.error || "Request failed");
      }
      
      console.log("Success:", data);
      setStatus("success");
      
      // 👈 FIX: Use formRef instead of e.currentTarget
      formRef.current?.reset();
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef} // 👈 ADD: Form reference
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-zinc-300" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-emerald-500"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-zinc-300" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-emerald-500"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-zinc-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-emerald-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-400">
          Thanks! I'll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
