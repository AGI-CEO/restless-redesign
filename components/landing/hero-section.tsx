"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Shield, ChevronRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/videos/restless-hero-desktop.webm" type="video/webm" />
      </video>
      
      {/* Video Background - Mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src="/videos/restless-hero-mobile.webm" type="video/webm" />
      </video>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-4 py-2 w-fit">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">
                Verified Reviews
              </span>
            </GlassCard>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
              <span className="text-foreground">STAY IN</span>
              <br />
              <span className="text-gradient">THE FIGHT</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              A better-for-you energy drink to attack the day without crashing
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base group shimmer"
              >
                SHOP 40% OFF
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-glass-border bg-glass hover:bg-glass-border/30 text-foreground font-semibold tracking-wide px-8 py-6 text-base"
              >
                BENEFITS
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

          {/* Descriptive Text Panel */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <GlassCard 
              variant="strong" 
              shimmer 
              className="relative p-8 lg:p-10 max-w-lg w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Liquid glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 rounded-2xl blur-xl opacity-60" />
              
              <div className="relative flex flex-col gap-6">
                {/* Section Label */}
                <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
                  Performance Energy Blend
                </span>
                
                {/* Feature List */}
                <div className="flex flex-col gap-5">
                  {[
                    { title: "Jitter-Free Energy", desc: "Clean caffeine + L-Theanine for smooth, sustained focus without the crash" },
                    { title: "1,000mg Electrolytes", desc: "Sodium, potassium, calcium & magnesium for superior hydration" },
                    { title: "23 Vitamins & Minerals", desc: "Full-spectrum B vitamins, D3+K2, and essential trace minerals" },
                    { title: "Zero Sugar, 5 Calories", desc: "All the performance, none of the junk" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stats Row */}
                <div className="flex justify-between pt-4 mt-2 border-t border-glass-border">
                  {[
                    { label: "Servings", value: "30" },
                    { label: "Caffeine", value: "120mg" },
                    { label: "Calories", value: "5" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl lg:text-2xl font-bold text-foreground">{stat.value}</p>
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
