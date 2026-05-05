"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Droplets, Brain, Leaf, Pill, Activity, Sparkles } from "lucide-react"

const ingredients = [
  {
    icon: Droplets,
    title: "ELECTROLYTES",
    amount: "1000mg",
    description: "Sodium, potassium, and magnesium for optimal hydration and muscle function.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    icon: Brain,
    title: "NOOTROPICS",
    amount: "Premium Blend",
    description: "Alpha-GPC, L-Theanine, and more for enhanced cognitive performance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Leaf,
    title: "ANTIOXIDANTS",
    amount: "Full Spectrum",
    description: "Vitamin C, E, and plant extracts to combat oxidative stress.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
  },
  {
    icon: Pill,
    title: "B-VITAMINS",
    amount: "Complete Complex",
    description: "B6, B12, and more for energy metabolism and nervous system support.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Activity,
    title: "STEADY FLOW",
    amount: "No Crash Formula",
    description: "Zero caffeine, zero sugar. Sustained energy without the spike and crash.",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
  },
  {
    icon: Sparkles,
    title: "ADAPTOGENS",
    amount: "Stress Support",
    description: "Natural compounds to help your body adapt to physical and mental stress.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },
]

export function IngredientsSection() {
  return (
    <section id="ingredients" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.65 0.18 145) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            The Tactical Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            WHAT&apos;S <span className="text-gradient">INSIDE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent labeling. No proprietary blends. You know exactly what you&apos;re putting 
            in your body and why.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <GlassCard
              key={ingredient.title}
              variant="subtle"
              hover
              className="p-6 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${ingredient.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${ingredient.bgColor} ${ingredient.borderColor} border flex items-center justify-center`}>
                    <ingredient.icon className={`w-6 h-6 ${ingredient.color}`} />
                  </div>
                  <span className={`font-mono text-sm font-semibold ${ingredient.color}`}>
                    {ingredient.amount}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold tracking-wide mb-2 text-foreground">
                  {ingredient.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ingredient.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${ingredient.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <GlassCard variant="strong" className="inline-flex items-center gap-4 px-8 py-4">
            <div className="flex -space-x-2">
              {["Informed Sport", "Made in USA", "NSF Certified"].map((cert, i) => (
                <div 
                  key={cert}
                  className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center"
                  style={{ zIndex: 3 - i }}
                >
                  <span className="text-[8px] font-mono text-muted-foreground text-center leading-tight px-1">
                    {cert.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Third-Party Tested</p>
              <p className="text-xs text-muted-foreground">Certified safe for professional athletes</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
