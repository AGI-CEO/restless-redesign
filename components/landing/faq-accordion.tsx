"use client"

import { useState } from "react"
import { GlassCard } from "@/components/effects/glass-card"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What makes Restless different from energy drinks?",
    answer: "Unlike traditional energy drinks loaded with sugar and artificial ingredients, Restless provides clean, steady energy with 120mg of naturally-derived caffeine from green tea, paired with L-Theanine at a 2:1 ratio for zero jitters and no crash. Plus, you get 1000mg electrolytes, nootropics, and 23 vitamins and minerals in every serving.",
  },
  {
    question: "Does Restless offer Discounts?",
    answer: "Yes! We offer Military Discounts, First Responder Discounts, and Student Discounts. Subscribe and save 40% on your first order and 36% on all recurring orders. Plus, get 15% off your first order when you sign up.",
  },
  {
    question: "What's included in subscription?",
    answer: "With a subscription you get 40% off your first order, 36% off all recurring orders, FREE shipping always, and the flexibility to pause, skip, or cancel anytime. Delivery every 30 days keeps you stocked and in the fight.",
  },
  {
    question: "How can I be sure Restless is safe?",
    answer: "Restless is Informed Sport Certified, meaning every batch is tested for over 250 substances banned in sport. We use transparent labeling with no proprietary blends, are third-party lab tested, and made in the USA in a GMP-certified facility.",
  },
  {
    question: "How does the 100-day guarantee work?",
    answer: "Simple: if you don't feel it, you don't pay for it. Restless will keep you in the fight—you'll feel stronger, sharper, and more resilient. If not, we'll refund your purchase in full. No return required. No questions asked.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            COMMON <span className="text-gradient">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              variant={openIndex === index ? "strong" : "subtle"}
              className={cn(
                "transition-all duration-300 overflow-hidden",
                openIndex === index && "glow-pulse"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                  openIndex === index 
                    ? "bg-primary/20 border border-primary/40" 
                    : "bg-muted border border-glass-border"
                )}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-glass-border mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base"
          >
            Try Now
          </Button>
        </div>
      </div>
    </section>
  )
}
