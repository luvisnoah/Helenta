"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"])

  return (
    <section id="about" className="relative py-32 md:py-48 px-6 bg-background overflow-hidden" ref={containerRef}>
      {/* Ambient lighting */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-[400px] h-[400px]"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.25 340 / 0.1), transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[300px] h-[300px]"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.2 300 / 0.08), transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Statement */}
        <motion.div
          style={{ y: textY }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase">The Underground</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We don&apos;t design for{" "}
            <span className="font-[family-name:var(--font-display)] text-primary neon-glow">daylight.</span>
            <br />
            <br />
            HELENTÄ exists in the space between midnight and dawn. Where neon bleeds into concrete. Where style is survival.
          </motion.h2>

          {/* Animated line */}
          <motion.div
            className="h-px bg-gradient-to-r from-primary via-accent to-transparent"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Stats/Info Grid */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="space-y-4">
            <span className="text-5xl font-[family-name:var(--font-display)] text-primary neon-glow">01</span>
            <h3 className="text-sm tracking-widest uppercase text-foreground">Underground Origins</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Born in the back rooms of Tokyo&apos;s club district. Forged in late-night sessions. Made for those who move in shadows.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-5xl font-[family-name:var(--font-display)] text-primary neon-glow">02</span>
            <h3 className="text-sm tracking-widest uppercase text-foreground">Chrome & Shadow</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every piece features hand-finished chrome detailing. Reflective elements that catch neon. Invisible in daylight, alive at night.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-5xl font-[family-name:var(--font-display)] text-primary neon-glow">03</span>
            <h3 className="text-sm tracking-widest uppercase text-foreground">Limited Releases</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each drop is limited. No restocks. No compromises. When it&apos;s gone, it becomes legend.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-primary neon-glow italic">
            &quot;Built for the ones who stay up.&quot;
          </p>
          <span className="mt-4 inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground">
            — HELENTÄ Collective
          </span>
        </motion.blockquote>
      </div>
    </section>
  )
}
