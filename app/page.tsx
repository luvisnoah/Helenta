import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedCollection } from "@/components/featured-collection"
import { EditorialGallery } from "@/components/editorial-gallery"
import { AboutSection } from "@/components/about-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <EditorialGallery />
      <AboutSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
