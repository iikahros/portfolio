"use client"

import { useCallback, useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

interface ParticleBackgroundProps {
  className?: string
}

export default function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isMouseInCanvasRef = useRef(false)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const colorsRef = useRef(["#f43f5e", "#a855f7", "#6366f1", "#06b6d4"])

  // Initialize particles
  const initParticles = useCallback(() => {
    if (!canvasRef.current) return

    const { width, height } = canvasRef.current
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 9000), 100) // Adjust density based on screen size

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: colorsRef.current[Math.floor(Math.random() * colorsRef.current.length)],
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    particlesRef.current = particles
  }, [])

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { width, height } = canvas.getBoundingClientRect()

    // Set canvas dimensions to match display size
    canvas.width = width
    canvas.height = height

    initParticles()
  }, [initParticles])

  // Handle mouse movement
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    mousePositionRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }, [])

  // Handle mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    isMouseInCanvasRef.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    isMouseInCanvasRef.current = false
  }, [])

  // Draw particles and connections
  const drawParticles = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x > canvas.width || particle.x < 0) {
        particle.speedX = -particle.speedX
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.speedY = -particle.speedY
      }

      // Keep particles within bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(canvas.height, particle.y))

      // Mouse interaction
      if (isMouseInCanvasRef.current) {
        const dx = mousePositionRef.current.x - particle.x
        const dy = mousePositionRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.speedX -= (dx / distance) * force * 0.02
          particle.speedY -= (dy / distance) * force * 0.02
        }
      }

      // Speed limit
      const maxSpeed = 1.5
      const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
      if (currentSpeed > maxSpeed) {
        particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
        particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
      ctx.globalAlpha = 1

      // Draw connections
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = particle.color
          ctx.globalAlpha = (100 - distance) / 1000
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }
    })

    animationFrameRef.current = requestAnimationFrame(drawParticles)
  }, [])

  // Initialize on mount
  useEffect(() => {
    // Initial setup
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      initParticles()
    }

    // Event listeners
    window.addEventListener("resize", handleResize)
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseenter", handleMouseEnter)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(drawParticles)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseenter", handleMouseEnter)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [drawParticles, handleMouseEnter, handleMouseLeave, handleMouseMove, handleResize, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}
