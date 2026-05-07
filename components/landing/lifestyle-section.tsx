"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Star, Shield, Zap, Droplets } from "lucide-react"

const highlights = [
  { icon: Zap, label: "120mg Clean Caffeine", desc: "No jitters, no crash" },
  { icon: Droplets, label: "1,000mg Electrolytes", desc: "Full-spectrum hydration" },
  { icon: Shield, label: "23 Vitamins & Minerals", desc: "Complete daily coverage" },
]

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

        {/* Editorial layout: Image + Content side by side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Hero image */}
          <GlassCard variant="subtle" hover className="relative overflow-hidden aspect-[3/4] group">
            <Image
              src="/images/tactical-jungle-product.jpg"
              alt="RESTLESS Performance Energy Blend in tactical jungle environment with gear"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* HUD corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-primary uppercase">
                  Field Ready
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">Tactical Fuel for the Field</h3>
            </div>
          </GlassCard>

          {/* Right: Content stack */}
          <div className="flex flex-col gap-8">
            {/* Quote / social proof */}
            <GlassCard variant="strong" shimmer className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground font-medium leading-relaxed mb-4">
                &ldquo;I&apos;ve tried every energy supplement on the market. Restless is the only one 
                that keeps me sharp on a 16-hour shift without the crash.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">M.R.</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Active Duty, U.S. Army</p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </GlassCard>

            {/* Highlight cards */}
            {highlights.map((item, index) => (
              <GlassCard
                key={item.label}
                variant="default"
                hover
                className="p-5 flex items-center gap-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground tracking-wide uppercase group-hover:text-primary transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </GlassCard>
            ))}

            {/* CTA */}
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider py-6 text-base group shimmer w-full lg:w-auto"
            >
              <Link href="https://restlessco.store/products/energy-blend?sca_ref=8594510.rAV4rrFMuXz">
                SHOP 40% OFF
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
