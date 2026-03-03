import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    // DEBUG: Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY missing from .env.local");
      return NextResponse.json({ ok: false, error: "API key missing" }, { status: 500 });
    }

    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    console.log("📝 Form data received:", body); // DEBUG

    const { name, email, message } = body as any;

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // ✅ Use Resend's default sender
      to: ['caspersky700@gmail.com'],
      subject: `New message from ${String(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${String(name)}</p>
        <p><strong>Email:</strong> ${String(email)}</p>
        <p><strong>Message:</strong><br>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("❌ Email send failed:", error.message);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
