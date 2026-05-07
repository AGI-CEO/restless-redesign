import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsGrid } from "@/components/landing/benefits-grid"
import { FieldTestedSection } from "@/components/landing/field-tested-section"
import { IngredientsSection } from "@/components/landing/ingredients-section"
import { LifestyleSection } from "@/components/landing/lifestyle-section"
import { OperationalGallery } from "@/components/landing/operational-gallery"
import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel"
import { GuaranteeBanner } from "@/components/landing/guarantee-banner"
import { FAQAccordion } from "@/components/landing/faq-accordion"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BenefitsGrid />
      <FieldTestedSection />
      <IngredientsSection />
      <LifestyleSection />
      <OperationalGallery />
      <TestimonialsCarousel />
      <GuaranteeBanner />
      <FAQAccordion />
      <Footer />
    </main>
  )
}
