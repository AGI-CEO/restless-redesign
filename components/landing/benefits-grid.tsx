"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Zap, Brain, Droplets, Activity, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Jitter Free Energy",
    description: "Clean, steady energy that lasts so you can get through demanding work, training, and life without the crash, jitters, or sugar-bomb feeling of traditional energy drinks.",
  },
  {
    icon: Brain,
    title: "Combats Brain Fog",
    description: "L-Theanine paired with caffeine at a 2:1 ratio for zero brain fog and no jitters or crash.",
  },
  {
    icon: Droplets,
    title: "Superior Hydration",
    description: "1,000mg electrolytes - Sodium, potassium, calcium, and magnesium blend formulated for sustained hydration in demanding environments.",
  },
  {
    icon: Activity,
    title: "Supports Recovery",
    description: "Beetroot powder and ginger support cardiovascular efficiency, reduce muscle soreness, and accelerate recovery.",
  },
  {
    icon: Leaf,
    title: "Nutritional Powerhouse",
    description: "23 vitamins and minerals including full-spectrum B vitamins, Vitamin D3 + K2, and essential trace minerals.",
  },
]

export function BenefitsGrid() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Daily Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            PERFORMANCE <span className="text-gradient">WITHOUT BURNOUT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Clean, steady energy that lasts so you can get through demanding work, training, and life without the crash, jitters, or sugar-bomb feeling of traditional energy drinks.
          </p>
          <p className="text-sm text-primary mt-4 font-semibold">Starting at $1.86 / day</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              variant="default"
              hover
              className="p-6 lg:p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold tracking-wide mb-3 text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
