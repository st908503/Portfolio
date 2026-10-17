import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/lib/data/profile";

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20000) return NextResponse.json({ ok: false, error: "Your message is too long." }, { status: 413 });
    const form = await request.formData();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (form.get("website")) return NextResponse.json({ ok: false, error: "Unable to submit this message." }, { status: 400 });
    if (!name || name.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Please enter your name, a valid email, and a message between 10 and 5,000 characters." }, { status: 400 });
    }
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ ok: false, error: "The contact form is currently unavailable. Please email me directly." }, { status: 503 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [profile.email], replyTo: email,
      subject: `Portfolio enquiry from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (error) return NextResponse.json({ ok: false, error: "Your message could not be sent. Please email me directly." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process your message. Please try again or email me directly." }, { status: 400 });
  }
}
