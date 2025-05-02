import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Parse the incoming JSON body from the request
  const { name, email, message } = await req.json();

  // Validate that all necessary fields are provided
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    // Send email through Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's default sender address for now
      to: ["aakashkum1104@gmail.com"], // Your email address to receive the contact form message
      subject: `New Contact Form Submission from ${name}`, // Dynamic subject with sender's name
      replyTo: email, // Reply to the email provided by the user
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Message body
    });

    // Return a success response
    return NextResponse.json({ message: "Thanks for your message! I'll get back to you soon." });
  } catch (error) {
    // Handle any errors from Resend
    console.error("Resend error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
