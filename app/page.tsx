import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsGrid } from "@/components/landing/benefits-grid"
import { LifestyleSection } from "@/components/landing/lifestyle-section"
import { IngredientsSection } from "@/components/landing/ingredients-section"
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
      <LifestyleSection />
      <IngredientsSection />
      <TestimonialsCarousel />
      <GuaranteeBanner />
      <FAQAccordion />
      <Footer />
    </main>
  )
}
