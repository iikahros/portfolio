"use client"

import { useEffect, useRef } from "react"

export default function HeroIllustration() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const elements = svgRef.current?.querySelectorAll(".animate-float, .animate-pulse, .animate-spin-slow")

    if (elements) {
      elements.forEach((el, i) => {
        if (el instanceof SVGElement) {
          // Add random delay to each element for more natural movement
          const delay = Math.random() * 2
          el.style.animationDelay = `${delay}s`
        }
      })
    }
  }, [])

  return (
    <div className="w-full max-w-lg mx-auto mt-8 md:mt-0">
      <svg
        ref={svgRef}
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Background glow */}
        <circle cx="250" cy="200" r="120" fill="url(#radialGradient)" className="animate-pulse opacity-70" />

        {/* Code window */}
        <rect
          x="100"
          y="100"
          width="300"
          height="200"
          rx="10"
          fill="url(#codeWindowGradient)"
          stroke="#a855f7"
          strokeWidth="2"
          className="animate-float"
        />

        {/* Window header */}
        <rect x="100" y="100" width="300" height="30" rx="10" fill="#2d1b69" />
        <rect x="100" y="120" width="300" height="10" rx="0" fill="#2d1b69" />

        {/* Window buttons */}
        <circle cx="120" cy="115" r="6" fill="#f43f5e" />
        <circle cx="140" cy="115" r="6" fill="#eab308" />
        <circle cx="160" cy="115" r="6" fill="#22c55e" />

        {/* Code lines */}
        <rect x="120" y="145" width="120" height="8" rx="4" fill="#f43f5e" opacity="0.7" className="animate-pulse" />
        <rect x="120" y="165" width="200" height="8" rx="4" fill="#a855f7" opacity="0.7" className="animate-pulse" />
        <rect x="120" y="185" width="160" height="8" rx="4" fill="#6366f1" opacity="0.7" className="animate-pulse" />
        <rect x="120" y="205" width="180" height="8" rx="4" fill="#f43f5e" opacity="0.7" className="animate-pulse" />
        <rect x="120" y="225" width="140" height="8" rx="4" fill="#a855f7" opacity="0.7" className="animate-pulse" />
        <rect x="120" y="245" width="160" height="8" rx="4" fill="#6366f1" opacity="0.7" className="animate-pulse" />

        {/* Floating elements */}
        <circle cx="60" cy="120" r="15" fill="#f43f5e" className="animate-float" style={{ animationDuration: "6s" }} />
        <circle cx="440" cy="280" r="20" fill="#a855f7" className="animate-float" style={{ animationDuration: "8s" }} />
        <circle cx="380" cy="80" r="12" fill="#6366f1" className="animate-float" style={{ animationDuration: "7s" }} />

        {/* Code brackets */}
        <path
          d="M80 180 L60 200 L80 220"
          stroke="#f43f5e"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-float"
          style={{ animationDuration: "5s" }}
        />
        <path
          d="M420 180 L440 200 L420 220"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-float"
          style={{ animationDuration: "5s" }}
        />

        {/* Gear icons */}
        <path
          d="M50 300 A1 1 0 0 1 70 300 A1 1 0 0 1 50 300"
          fill="none"
          stroke="#a855f7"
          strokeWidth="3"
          className="animate-spin-slow"
        />
        <path
          d="M50 300 A1 1 0 0 1 60 290 A1 1 0 0 1 70 300 A1 1 0 0 1 60 310 A1 1 0 0 1 50 300"
          fill="none"
          stroke="#a855f7"
          strokeWidth="3"
          className="animate-spin-slow"
        />

        <path
          d="M430 320 A1 1 0 0 1 450 320 A1 1 0 0 1 430 320"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="3"
          className="animate-spin-slow"
          style={{ animationDuration: "10s" }}
        />
        <path
          d="M430 320 A1 1 0 0 1 440 310 A1 1 0 0 1 450 320 A1 1 0 0 1 440 330 A1 1 0 0 1 430 320"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="3"
          className="animate-spin-slow"
          style={{ animationDuration: "10s" }}
        />

        {/* Connecting lines */}
        <path
          d="M70 120 C 90 100, 90 100, 100 115"
          stroke="#f43f5e"
          strokeWidth="2"
          strokeDasharray="5 3"
          className="animate-pulse"
        />
        <path
          d="M380 80 C 400 90, 400 90, 380 115"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="5 3"
          className="animate-pulse"
        />
        <path
          d="M440 280 C 420 270, 420 270, 400 250"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="5 3"
          className="animate-pulse"
        />

        {/* Gradients */}
        <defs>
          <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="codeWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a103d" />
            <stop offset="100%" stopColor="#2d1b69" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
