"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            {/* Shield Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <div className="absolute inset-0 w-24 h-24 lg:w-32 lg:h-32 bg-primary/30 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4 text-foreground">
                100-DAY <span className="text-primary">MONEY-BACK</span> GUARANTEE
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                We&apos;re so confident in our formula that we offer a full 100-day guarantee. 
                If you&apos;re not completely satisfied with your performance results, 
                we&apos;ll refund every penny. No questions asked.
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {["Full Refund", "No Questions", "Free Returns"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base"
              >
                TRY RISK-FREE
              </Button>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
        </GlassCard>
      </div>
    </section>
  )
}
