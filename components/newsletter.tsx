"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.25 340 / 0.05), transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ top: `${i * 10 + 10}%` }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Join The Underground</span>
          
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-primary neon-glow">
            Stay Connected
          </h2>
          
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Early access to drops. Exclusive content. No spam. Only the signal.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="mt-12"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <div className="relative max-w-md mx-auto">
              <motion.div
                className={`relative flex items-center border ${
                  isFocused ? "border-primary" : "border-muted-foreground/30"
                } transition-colors duration-300`}
                animate={{
                  boxShadow: isFocused ? "0 0 20px oklch(0.7 0.25 340 / 0.3)" : "none",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-6 py-4 text-foreground placeholder:text-muted-foreground outline-none text-sm tracking-wide"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-6 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </motion.button>
              </motion.div>

              {/* Animated border effect */}
              <motion.div
                className="absolute -inset-px pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, oklch(0.7 0.25 340 / ${isFocused ? 0.5 : 0}), transparent)`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <div className="text-primary neon-glow text-2xl font-[family-name:var(--font-display)]">
                You&apos;re In.
              </div>
              <p className="mt-2 text-muted-foreground text-sm">
                Welcome to the underground.
              </p>
            </motion.div>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 glitch-hover"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
