// /app/api/submit-contact-form/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON data
    const { name, email, message } = await req.json();

    // Validate that required fields are provided
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Send email via the Resend API
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aakashkum1104@gmail.com"], // Replace with the recipient email
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    // Return success response
    return NextResponse.json({ message: "Thanks for your message!" });
  } catch (error: any) {
    // Catch and log errors, return a 500 status if something goes wrong
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
