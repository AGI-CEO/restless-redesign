"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Leaf, Brain, Droplets, Activity, Pill, Sparkles } from "lucide-react"

const ingredients = [
  {
    icon: Leaf,
    title: "Caffeine",
    amount: "120mg / Serving",
    description: "Naturally derived from green tea leaf extract, delivering clean, sustained energy alongside powerful antioxidants that support cellular health.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
  },
  {
    icon: Brain,
    title: "L-Theanine",
    amount: "240mg / Serving",
    description: "Paired with caffeine at a 2:1 ratio for zero brain fog and no jitters or crash.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Sparkles,
    title: "Rhodiola Rosea",
    amount: "100mg / Serving",
    description: "Adaptogen clinically shown to reduce mental and physical fatigue under high-stress conditions.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },
  {
    icon: Droplets,
    title: "Electrolytes",
    amount: "1000mg / Serving",
    description: "Sodium, potassium, calcium, and magnesium blend formulated for sustained hydration in demanding environments.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    icon: Pill,
    title: "Magnesium Bisglycinate",
    amount: "200mg / Serving",
    description: "Highly bioavailable form for muscle recovery and stress response.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Activity,
    title: "Beetroot Powder",
    amount: "3g / Serving",
    description: "Natural nitrate source improves cardiovascular efficiency and endurance during high-output efforts.",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
  },
]

const additionalIngredients = [
  { name: "Ginger", amount: "50mg", desc: "Anti-inflammatory for digestion and recovery" },
  { name: "Vitamin D3 + K2", amount: "20mg + 15mg", desc: "Immune function and bone density" },
  { name: "Blue Agave Inulin", amount: "2g", desc: "Prebiotic fiber for gut health" },
  { name: "Vitamin B Complex", amount: "100%+ DV", desc: "Energy metabolism and nervous system" },
  { name: "Vitamin C", amount: "100%+ DV", desc: "Immune defense from Acerola fruit" },
  { name: "Zinc", amount: "100% DV", desc: "Immune function and protein synthesis" },
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
            Stay in the Fight
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            DISCOVER THE <span className="text-gradient">CLEAN INGREDIENTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            That keep you in the fight
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

        {/* Additional Ingredients */}
        <div className="mt-12">
          <h3 className="text-center text-xl font-bold mb-8 text-foreground">Plus Essential Vitamins & Minerals</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalIngredients.map((item) => (
              <GlassCard key={item.name} variant="subtle" className="p-4 text-center">
                <p className="font-semibold text-sm text-foreground mb-1">{item.name}</p>
                <p className="text-xs text-primary font-mono mb-1">{item.amount}</p>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <GlassCard variant="strong" className="inline-flex items-center gap-4 px-8 py-4">
            <div className="flex -space-x-2">
              {["Informed Sport", "Made in USA", "3rd Party"].map((cert, i) => (
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
              <p className="text-sm font-semibold text-foreground">Third-Party Certified</p>
              <p className="text-xs text-muted-foreground">Informed Sport Certified</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
