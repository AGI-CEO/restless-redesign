"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Target, Clock, Flame, ChevronRight } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "MISSION READY",
    description: "Formulated for those who need to perform when it matters most.",
  },
  {
    icon: Clock,
    title: "SUSTAINED ENERGY",
    description: "No crash, no jitters. Just steady, reliable performance for hours.",
  },
  {
    icon: Flame,
    title: "ZERO COMPROMISE",
    description: "No artificial colors, no sugar, no proprietary blends.",
  },
]

export function LifestyleSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <GlassCard variant="strong" className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="/images/lifestyle-tactical.jpg"
                alt="Tactical operator staying focused during intense operations"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <GlassCard variant="subtle" className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">V</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Veteran Owned</p>
                    <p className="text-xs text-muted-foreground">Made by operators, for operators</p>
                  </div>
                </GlassCard>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
            </GlassCard>

            {/* Floating Glow */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Built for the Front Lines
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
              FUEL YOUR <span className="text-gradient">MISSION</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Whether you&apos;re on patrol, in the ER, or pushing through a grueling shift, 
              RESTLESS was designed by veterans and first responders who understand 
              what it takes to stay sharp when lives depend on it.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-4 mt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground tracking-wide mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base w-fit mt-4 group"
            >
              LEARN OUR STORY
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
