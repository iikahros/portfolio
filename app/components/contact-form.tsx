"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 shadow-lg">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="border-2 focus:border-indigo-300 dark:focus:border-indigo-700 transition-all duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="border-2 focus:border-purple-300 dark:focus:border-purple-700 transition-all duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="border-2 focus:border-pink-300 dark:focus:border-pink-700 transition-all duration-300"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground animate-pulse">{message}</p>}
      </form>
    </Card>
  )
}
