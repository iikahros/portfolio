"use server"

import { Resend } from "resend"

// Access the environment variable correctly
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's default sender address for testing
      to: ["aakashkum1104@gmail.com"], // Your real inbox
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email?.toString(), // Ensure email is passed as a string
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return {
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Email send error:", error)
    return {
      message: "Something went wrong. Please try again later.",
    }
  }
}
