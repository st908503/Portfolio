"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { profile } from "@/lib/data/profile";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget), signal: controller.signal });
      const data = await response.json();
      if (!response.ok || data.ok !== true) throw new Error(data.error || "Your message could not be sent. Please try again or email me directly.");
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error && error.name !== "AbortError" ? error.message : "The request timed out. Please try again or email me directly.");
    } finally { window.clearTimeout(timeout); }
  }
  return <form ref={formRef} onSubmit={handleSubmit} className="contact-form" aria-busy={status === "loading"}>
    <p className="eyebrow">DROP ME A NOTE</p><h2>Let’s hear your idea.</h2>
    <div className="form-row"><div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Alex Morgan" autoComplete="name" maxLength={100} required /></div><div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="alex@company.com" autoComplete="email" maxLength={254} required /></div></div>
    <div className="form-field"><label htmlFor="message">What do you have in mind?</label><textarea id="message" name="message" placeholder="Tell me about the role, project, or idea…" rows={5} minLength={10} maxLength={5000} required /></div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <button type="submit" className="button button-primary" disabled={status === "loading"}>{status === "loading" ? <>Sending your message<LoaderCircle size={17} className="spin" /></> : <>Send message<ArrowUpRight size={18} /></>}</button>
    <p className="form-note">Prefer your inbox? <a href={`mailto:${profile.email}`}>Email me directly.</a></p>
    <div aria-live="polite" aria-atomic="true">{status === "success" && <p className="form-success"><CheckCircle2 size={18} />Thanks for reaching out. Your message has been sent.</p>}</div>
    {status === "error" && <p className="form-error" role="alert">{errorMessage} <a href={`mailto:${profile.email}`}>{profile.email}</a></p>}
  </form>;
}
