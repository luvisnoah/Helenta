"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-background border-t border-border/20">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-[family-name:var(--font-display)] text-4xl text-primary neon-glow">
              HELENTÄ
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Underground luxury streetwear. Born after midnight. Made for the night.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-foreground mb-4">Navigate</h4>
            <ul className="space-y-3">
              {["Collection", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-foreground mb-4">Info</h4>
            <ul className="space-y-3">
              {["Shipping", "Returns", "Size Guide", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HELENTÄ. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Animated marquee text */}
          <motion.div
            className="text-xs text-muted-foreground/50 tracking-widest uppercase overflow-hidden w-40"
          >
            <motion.span
              className="inline-block whitespace-nowrap"
              animate={{ x: [0, -100] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              BUILT AFTER MIDNIGHT • BUILT AFTER MIDNIGHT •{" "}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
