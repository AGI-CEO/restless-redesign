"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  "INFORMED SPORT CERTIFIED",
  "MADE IN THE USA",
  "TRANSPARENT LABELING",
  "THIRD-PARTY LAB TESTED",
  "VETERAN OWNED",
]

export function GuaranteeBanner() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <GlassCard 
          variant="strong" 
          className="relative p-8 lg:p-12 overflow-hidden glow-pulse"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl">
            <div className="absolute inset-0 rounded-xl border-2 border-primary/30 animate-pulse" />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  oklch(0.65 0.18 145 / 0.1) 10px,
                  oklch(0.65 0.18 145 / 0.1) 20px
                )`,
              }}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-32 h-40 lg:w-40 lg:h-52">
                <Image
                  src="/images/product-main.png"
                  alt="RESTLESS Performance Energy Blend"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4 text-foreground">
                If you don&apos;t feel it, <span className="text-primary">you don&apos;t pay for it</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                Restless will keep you in the fight—you&apos;ll feel stronger, sharper, and more resilient. 
                If not, we&apos;ll refund your purchase in full. No return required. No questions.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base"
              >
                Claim 100-Day Guarantee
              </Button>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
        </GlassCard>

        {/* Certifications Marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {[...certifications, ...certifications, ...certifications].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
