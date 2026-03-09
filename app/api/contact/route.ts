import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Inter,sans-serif;background:#0d0d0d;color:#fff;padding:32px;border-radius:12px;max-width:560px;">
          <h2 style="color:#39ff6e;margin:0 0 20px;font-size:1.3rem;">New Portfolio Message</h2>
          <p style="margin:0 0 8px;font-size:0.9rem;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px;font-size:0.9rem;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:none;border-top:1px solid #2a2a2a;margin:0 0 16px;" />
          <p style="white-space:pre-wrap;line-height:1.75;font-size:0.9rem;color:#ccc;">${escapeHtml(message)}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[contact/route] sendMail error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
