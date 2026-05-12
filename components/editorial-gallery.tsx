"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const editorialImages = [
  { id: 1, src: "/editorial/editorial-1.jpg", alt: "Night session", size: "large" },
  { id: 2, src: "/editorial/editorial-2.jpg", alt: "Tokyo streets", size: "small" },
  { id: 3, src: "/editorial/editorial-3.jpg", alt: "Neon portrait", size: "small" },
  { id: 4, src: "/editorial/editorial-4.jpg", alt: "Underground", size: "medium" },
  { id: 5, src: "/editorial/editorial-5.jpg", alt: "Chrome details", size: "medium" },
]

function GalleryImage({ image, index }: { image: typeof editorialImages[0]; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  const getGridSpan = () => {
    switch (image.size) {
      case "large":
        return "col-span-1 md:col-span-2 row-span-2"
      case "medium":
        return "col-span-1 row-span-1 md:row-span-2"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${getGridSpan()}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <motion.div className="relative w-full h-full min-h-[300px] md:min-h-[400px]" style={{ y, scale }}>
        <div className="absolute inset-0 bg-charcoal">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-sm tracking-widest uppercase text-foreground">{image.alt}</span>
        </div>

        {/* Neon border on hover */}
        <div className="absolute inset-0 border border-transparent hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

export function EditorialGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="editorial" className="relative py-32 px-6 bg-background overflow-hidden" ref={containerRef}>
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.2 300 / 0.08), transparent 70%)",
          filter: "blur(100px)",
          opacity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Campaign SS26</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-primary neon-glow">
            Editorial
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Shot in Tokyo&apos;s hidden alleys. 2AM lighting. Underground energy.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {editorialImages.map((image, index) => (
            <GalleryImage key={image.id} image={image} index={index} />
          ))}
        </div>

        {/* View Full Editorial Link */}
        <motion.div
          className="mt-12 flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#"
            className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm tracking-widest uppercase">View Full Editorial</span>
            <motion.span
              className="text-xl"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
