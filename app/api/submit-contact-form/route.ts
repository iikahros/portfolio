import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Parse incoming JSON data from the request
  const { name, email, message } = await req.json();

  // Validate that all required fields are provided
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    // Send email using Resend API
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Default sender address from Resend
      to: ["aakashkum1104@gmail.com"], // Replace with the desired recipient email address
      subject: `New Contact Form Submission from ${name}`, // Dynamic subject line
      replyTo: email, // Reply to the email provided by the user
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Email body content
    });

    // Return a success response to the client
    return NextResponse.json({ message: "Thanks for your message! I'll get back to you soon." });
  } catch (error: any) {
    // Log the error and send failure response
    console.error("Resend error:", error);

    // Check if error has a message, otherwise provide a default error message
    const errorMessage = error?.message || "Unknown error occurred";
    return NextResponse.json({ message: "Failed to send email", error: errorMessage }, { status: 500 });
  }
}
