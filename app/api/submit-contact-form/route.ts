import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aakashkum1104@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Thanks for your message! I'll get back to you soon." });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
