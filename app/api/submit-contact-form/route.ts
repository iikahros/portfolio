import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Send email using Resend API
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aakashkum1104@gmail.com"], // Add the recipient email(s)
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    // Return success message
    return NextResponse.json({ message: "Thanks for your message!" });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
