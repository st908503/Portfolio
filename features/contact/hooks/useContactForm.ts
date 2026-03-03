"use client";

import { useState } from "react";
import { contactSchema, type ContactFormValues } from "../helpers/contactSchema";

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(values: ContactFormValues) {
    try {
      setStatus("loading");
      setError(null);

      const parsed = contactSchema.parse(values);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message ?? "Something went wrong");
    }
  }

  return { status, error, submit };
}
