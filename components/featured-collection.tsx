"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "\u201CHelenta Stars\u201D",
    price: "$185",
    image: "/products/hoodie1.png",
    tag: "New",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE", // Replace with your Stripe link
  },
  {
    id: 2,
    name: "\u201CAura of Snakes\u201D",
    price: "$95",
    image: "/products/snakespolo.png",
    tag: "Limited",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE", // Replace with your Stripe link
  },
  {
    id: 3,
    name: "\u201CMoney Lovin\u2019 Snakes Cargo\u201D",
    price: "$165",
    image: "/products/cargo.png",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE", // Replace with your Stripe link
  },
  {
    id: 4,
    name: "\u201CNeon Pulse Jacket\u201D",
    price: "$245",
    image: "/products/HelentaBundle.png",
    tag: "Exclusive",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE", // Replace with your Stripe link
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs tracking-widest uppercase">
            {product.tag}
          </div>
        )}

        {/* Buy Now */}
        <motion.a
          href={product.stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 right-4 py-3 bg-background/90 backdrop-blur-sm border border-primary/30 text-primary text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Buy Now
        </motion.a>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-sm tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.price}</p>
      </div>

      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

export function FeaturedCollection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="collection" className="relative py-32 px-6 bg-background" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Drop 001</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-primary neon-glow">
            Featured Collection
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Oversized silhouettes meet chrome graphics. Designed for the underground.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-muted-foreground/30 text-foreground tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all duration-500 glitch-hover"
          >
            View All Products
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
