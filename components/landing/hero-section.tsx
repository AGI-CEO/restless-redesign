"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Shield, ChevronRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tactical-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.65 0.18 145 / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.65 0.18 145 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-4 py-2 w-fit">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">
                Tactical Fuel for Long Shifts
              </span>
            </GlassCard>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
              <span className="text-foreground">PERFORMANCE</span>
              <br />
              <span className="text-foreground">ENERGY FOR</span>
              <br />
              <span className="text-gradient">THOSE WHO STAY</span>
              <br />
              <span className="text-gradient">IN THE FIGHT</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Premium energy blend with 1000mg electrolytes, nootropics, and essential vitamins. 
              Sustained energy without the crash. Made for operators.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base group shimmer"
              >
                SHOP NOW
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-glass-border bg-glass hover:bg-glass-border/30 text-foreground font-semibold tracking-wide px-8 py-6 text-base"
              >
                LEARN MORE
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/30">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">100-Day Money-Back Guarantee</p>
                <p className="text-xs text-muted-foreground">No questions asked. Try it risk-free.</p>
              </div>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <GlassCard 
              variant="strong" 
              shimmer 
              className="relative p-6 lg:p-10 max-w-md w-full"
            >
              {/* Product Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 lg:w-72 lg:h-72 bg-primary/20 rounded-full blur-[64px]" />
              </div>
              
              {/* Product Image */}
              <div className="relative flex flex-col items-center justify-center gap-6">
                <div className="relative w-48 h-64 lg:w-64 lg:h-80 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/product-main.png"
                    alt="RESTLESS Performance Energy Blend - Berry Lemonade"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="flex gap-4 lg:gap-6">
                  {[
                    { label: "Servings", value: "30" },
                    { label: "Caffeine", value: "0mg" },
                    { label: "Calories", value: "5" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg lg:text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-glass-border flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
