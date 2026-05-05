"use client"

import { useState } from "react"
import { GlassCard } from "@/components/effects/glass-card"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What makes RESTLESS different from other energy drinks?",
    answer: "RESTLESS is specifically formulated for high-performance professionals who need sustained energy without the crash. Unlike traditional energy drinks, we use zero caffeine and zero sugar. Our blend focuses on electrolytes, nootropics, and adaptogens for clean, steady energy that supports both physical and cognitive performance.",
  },
  {
    question: "Is RESTLESS safe for daily use?",
    answer: "Absolutely. Our formula is designed for daily use and contains no stimulants that could cause dependency. All ingredients are thoroughly tested and third-party verified for safety. We recommend one serving per shift or as needed for sustained performance.",
  },
  {
    question: "How quickly does RESTLESS work?",
    answer: "Most users report feeling the effects within 15-30 minutes of consumption. The electrolytes provide immediate hydration support, while the nootropic blend builds sustained focus over time. Unlike caffeine-based products, there's no spike and crash cycle.",
  },
  {
    question: "Can I take RESTLESS with other supplements or medications?",
    answer: "While RESTLESS contains only natural ingredients, we always recommend consulting with your healthcare provider before combining with other supplements or medications, especially if you have any pre-existing conditions or are pregnant/nursing.",
  },
  {
    question: "What does the 100-day guarantee cover?",
    answer: "Our guarantee is simple: if you're not completely satisfied with your results for any reason within 100 days of purchase, contact us for a full refund. No questions asked, no hoops to jump through. We'll even cover return shipping.",
  },
  {
    question: "Is RESTLESS tested for banned substances?",
    answer: "Yes. RESTLESS is Informed Sport certified, meaning every batch is tested for over 250 substances banned in sport. This makes it safe for professional athletes, military personnel, and anyone subject to drug testing.",
  },
  {
    question: "How should I store RESTLESS?",
    answer: "Store in a cool, dry place away from direct sunlight. Once mixed, we recommend consuming within 24 hours for optimal freshness and effectiveness. The powder form has a shelf life of 2 years when stored properly.",
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
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            FREQUENTLY <span className="text-gradient">ASKED</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about RESTLESS and how it can support your performance.
          </p>
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
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Contact Support
            <span className="text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
