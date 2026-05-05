"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Shield, Brain, Zap, Target, Battery, Heart } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "SUSTAINED ENERGY",
    description: "Clean, steady energy that lasts through your entire shift without the jitters or crash.",
  },
  {
    icon: Brain,
    title: "MENTAL CLARITY",
    description: "Nootropic blend designed to sharpen focus and enhance cognitive performance under pressure.",
  },
  {
    icon: Shield,
    title: "IMMUNE SUPPORT",
    description: "Essential vitamins and antioxidants to keep your defenses strong during high-stress operations.",
  },
  {
    icon: Target,
    title: "PRECISION FOCUS",
    description: "Stay locked in when it matters most. Zero brain fog, maximum situational awareness.",
  },
  {
    icon: Battery,
    title: "RAPID HYDRATION",
    description: "1000mg electrolytes for optimal hydration and peak physical performance.",
  },
  {
    icon: Heart,
    title: "HEART-HEALTHY",
    description: "Zero caffeine, zero sugar. Designed for those who demand performance without compromise.",
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
            Why Choose Restless
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            ENGINEERED FOR <span className="text-gradient">OPERATORS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every ingredient is selected with purpose. No fillers, no compromises. 
            Just what you need to perform at your best.
          </p>
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
