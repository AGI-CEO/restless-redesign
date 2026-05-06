"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Shield, ChevronRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-screen h-full object-contain object-left hidden md:block"
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
      
      {/* Subtle overlay for contrast - only on right side for desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60 hidden lg:block" />
      {/* Mobile: gradient at top and bottom only, leaving center clear */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background/80 to-transparent lg:hidden" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background/90 to-transparent lg:hidden" />

      {/* Mobile Layout - split top/bottom with clear center */}
      <div className="lg:hidden absolute inset-0 flex flex-col justify-between pt-20 pb-6 px-4 z-10">
        {/* Top Section - Minimal headline in glass panel */}
        <GlassCard 
          variant="subtle" 
          className="p-4 w-fit"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-mono font-medium tracking-widest text-primary uppercase">
              Verified Reviews
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight leading-none">
            <span className="text-foreground">STAY IN </span>
            <span className="text-gradient">THE FIGHT</span>
          </h1>
        </GlassCard>

        {/* Bottom Section - CTAs in glass panel */}
        <div className="flex flex-col items-center gap-4">
          <GlassCard 
            variant="subtle" 
            className="p-4 w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
              boxShadow: '0 -4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Subheadline */}
            <p className="text-sm text-muted-foreground text-center mb-3">
              A better-for-you energy drink to attack the day without crashing
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider py-5 text-sm group shimmer w-full"
              >
                SHOP 40% OFF
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-glass-border bg-glass/50 hover:bg-glass-border/30 text-foreground font-semibold tracking-wide py-5 text-sm w-full"
              >
                BENEFITS
              </Button>
            </div>
          </GlassCard>
          
          {/* Scroll Indicator - Mobile */}
          <div className="flex flex-col items-center gap-1 opacity-60">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10 hidden lg:block">

        {/* Desktop Layout - content in glass panel on right */}
        <div className="hidden lg:flex lg:justify-end">
          <GlassCard 
            variant="strong" 
            shimmer 
            className="relative p-10 xl:p-12 max-w-xl w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Liquid glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 rounded-2xl blur-xl opacity-60" />
            
            <div className="relative flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">
                  Verified Reviews
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-foreground">STAY IN</span>
                <br />
                <span className="text-gradient">THE FIGHT</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                A better-for-you energy drink to attack the day without crashing
              </p>

              {/* Feature List */}
              <div className="flex flex-col gap-4 py-4 border-y border-glass-border">
                {[
                  { title: "Jitter-Free Energy", desc: "Clean caffeine + L-Theanine for smooth, sustained focus" },
                  { title: "1,000mg Electrolytes", desc: "Sodium, potassium, calcium & magnesium for hydration" },
                  { title: "23 Vitamins & Minerals", desc: "Full-spectrum B vitamins, D3+K2, and trace minerals" },
                  { title: "Zero Sugar, 5 Calories", desc: "All the performance, none of the junk" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{feature.title}</span>
                      <span className="text-sm text-muted-foreground"> - {feature.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
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
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 border border-primary/30">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">100-Day Money-Back Guarantee</p>
                  <p className="text-xs text-muted-foreground">No questions asked. Try it risk-free.</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex justify-between pt-4 mt-2 border-t border-glass-border">
                {[
                  { label: "Servings", value: "30" },
                  { label: "Caffeine", value: "120mg" },
                  { label: "Calories", value: "5" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
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
