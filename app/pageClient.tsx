"use client";

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import HeroIllustration from "./components/hero-illustration"
import ParticleBackground from "./components/particle-background"
import { Typewriter } from 'react-simple-typewriter'

export default function PageClient() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-lg sm:inline-block">
               Home
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80 hover:text-pink-500">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80 hover:text-purple-500">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80 hover:text-indigo-500">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            {/* <ThemeToggle /> */}
              <Link href="https://github.com/iikahros/resume/blob/main/aakash_kumar_resume_2025.pdf" target="blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                  Resume
                </Button>
              </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <ParticleBackground className="opacity-70" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:w-1/2">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                      Nice to meet you!
                    </span>
                  </h1>
                  <p className="mx-auto md:mx-0 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    I am {" "}
                    <span className="text-pink-500 font-semibold">
                      <Typewriter
                        words={[
                          'a Robotics Engineer',
                          'an Automation Architect',
                          'a Full Stack Developer',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>{' '}
                    <br /> Focused on designing{' '}
                    <span className="text-purple-500 font-semibold">elegant control systems</span> 
                    <br /> to  solve complex problems.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="https://github.com/iikahros" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-900/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/aakash-kumar-988b1520b/" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-purple-100 hover:text-purple-500 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:aakashkum1104@gmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Projects
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Real-time Dynamic Tracking"
                description="A real-time dynamic tracking automation system designed to autonomously track and follow objects with precision. "
                image="./dyntrackcard.png?height=400&width=600"
                linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7321737355025928192/"
                tags={["Python", "Intel-RealSense", "Jaka", "YoloV5"]}
              />
              <ProjectCard
                title="Variable DoF Kinematics Simulator"
                description="A Kinematics Simulator with Variable Degrees of Freedom, Rotation Axes, Translation Offsets, and Joint Rotation Limits."
                image="./variabledofcard.png?height=400&width=600"
                githubLink="https://github.com/iikahros/variabledof"
                tags={["Python", "Tkinter", "Matplotlib"]}
              />
              <ProjectCard
                title="Dijkstra Warehouse Pathfinding"
                description="A Python project that uses Dijkstra's algorithm to find the shortest path in a 2D warehouse grid."
                image="./pathfindingcard.png?height=400&width=600"
                githubLink="https://github.com/iikahros/Warehouse-Navigation/tree/main"
                tags={["Python", "Dijkstra", "Jupyter Notebook", "Matplotlib"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 opacity-50"></div>
          <ParticleBackground className="opacity-30" />
          <div className="container px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                Tech Stack
              </span>
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 relative">
          <ParticleBackground className="opacity-20" />
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                  Get in Touch
                </span>
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-medium">
              Aakash Kumar
            </span>
            . All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 hover:text-pink-500 transition-colors" href="#">
              {/* Terms of Service */}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 hover:text-purple-500 transition-colors"
              href="#"
            >
              {/* Privacy */}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
