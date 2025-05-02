"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"success" | "error" | "">("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setMessage("")
    setStatus("")

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const messageContent = formData.get("message") as string

    try {
      const res = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message: messageContent }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Unknown error")
      }

      setMessage(data.message || "Thanks! I'll get back to you.")
      setStatus("success")
      form.reset()
    } catch (err: any) {
      setMessage(err.message || "Something went wrong. Please try again later.")
      setStatus("error")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p
            className={`text-sm text-center mt-4 ${
              status === "success" ? "text-green-500" : "text-red-500"
            } animate-pulse`}
          >
            {message}
          </p>
        )}
      </form>
    </Card>
  )
}
