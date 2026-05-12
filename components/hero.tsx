"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

function Particle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100
  const randomDuration = 8 + Math.random() * 12
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/40"
      initial={{ 
        x: `${randomX}vw`, 
        y: "100vh", 
        opacity: 0,
        scale: Math.random() * 0.5 + 0.5
      }}
      animate={{ 
        y: "-10vh", 
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ left: `${randomX}%` }}
    />
  )
}

function SmokeLayer({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0.1 }}
      animate={{ 
        opacity: [0.05, 0.15, 0.05],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8 + index * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 1.5
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse ${60 + index * 20}% ${40 + index * 10}% at ${30 + index * 20}% ${50 + index * 10}%, oklch(0.35 0.15 300 / 0.15), transparent)`,
        }}
      />
    </motion.div>
  )
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* City lights bokeh effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? "radial-gradient(circle, oklch(0.7 0.25 340 / 0.08), transparent 70%)"
                : i % 3 === 1
                ? "radial-gradient(circle, oklch(0.65 0.2 300 / 0.06), transparent 70%)"
                : "radial-gradient(circle, oklch(0.7 0.02 260 / 0.04), transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Smoke layers */}
      {[0, 1, 2].map((i) => (
        <SmokeLayer key={i} index={i} />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Ambient light following mouse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, oklch(0.7 0.25 340 / 0.1), transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: mousePosition.x * 200,
          y: mousePosition.y * 200,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <motion.h1
          className="font-[family-name:var(--font-display)] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] tracking-wider neon-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          HELENTÄ
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Built After Midnight.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#collection"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-primary/50 text-primary tracking-widest uppercase text-sm transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:border-primary glitch-hover overflow-hidden"
          >
            <span className="relative z-10">Enter</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Grain overlay */}
      <div className="grain-overlay" />
    </section>
  )
}
