"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"

export function LifestyleSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Premium Quality
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            FUEL YOUR <span className="text-gradient">MISSION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every scoop delivers the perfect blend of electrolytes, nootropics, and vitamins 
            for sustained performance without the crash.
          </p>
        </div>

        {/* Product Gallery Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Large Featured Image */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-square lg:aspect-auto lg:row-span-2 group">
            <Image
              src="/images/product-hero-glow.jpg"
              alt="RESTLESS Performance Energy Blend with dramatic glow lighting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">Studio Shot</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Premium Packaging</h3>
            </div>
          </GlassCard>

          {/* Powder Splash */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-video group">
            <Image
              src="/images/product-powder-splash.jpg"
              alt="RESTLESS powder exploding from package"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs text-secondary uppercase tracking-wider">Berry Lemonade</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Instant Mix Formula</h3>
            </div>
          </GlassCard>

          {/* Mixed Drink */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-video group">
            <Image
              src="/images/product-mixed-glass.jpg"
              alt="RESTLESS mixed in a glass with ice"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Refreshing Taste</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Ready in Seconds</h3>
            </div>
          </GlassCard>
        </div>

        {/* Bottom Row - Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Flat Lay */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-[4/3] group">
            <Image
              src="/images/product-flat-lay.jpg"
              alt="RESTLESS flat lay with ingredients"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">Natural Ingredients</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Clean Label Formula</h3>
            </div>
          </GlassCard>

          {/* Three Pack */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-[4/3] group">
            <Image
              src="/images/product-three-pack.jpg"
              alt="RESTLESS three pack bundle"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs text-secondary uppercase tracking-wider">Best Value</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Bundle & Save 20%</h3>
            </div>
          </GlassCard>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <GlassCard variant="strong" shimmer className="inline-block p-8 max-w-xl">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-lg text-foreground font-medium mb-2">
              Trusted by 10,000+ First Responders & Veterans
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Join the operators who refuse to compromise on performance.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider">
              <Link href="https://restlessco.store/products/energy-blend?sca_ref=8594510.rAV4rrFMuXz">
                Shop Now <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
