"use client"

import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Eye, Target, Moon, Wrench } from "lucide-react"

const operationalScenes = [
  {
    icon: Moon,
    label: "Night Operations",
    caption: "Sustained focus through extended darkness",
  },
  {
    icon: Eye,
    label: "Recon Ready",
    caption: "Clarity when the situation demands it",
  },
  {
    icon: Target,
    label: "Mission Critical",
    caption: "Performance fuel for high-stakes moments",
  },
  {
    icon: Wrench,
    label: "Field Prep",
    caption: "Rapid deployment, zero downtime",
  },
]

export function OperationalGallery() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Operational Readiness
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            TESTED IN <span className="text-gradient">EVERY CONDITION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From night patrols to pre-dawn PT. Restless was designed to perform 
            in the environments where traditional energy drinks fail.
          </p>
        </div>

        {/* Main layout: Large image left + stacked cards right */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large cinematic image - 4-panel grid */}
          <div className="lg:col-span-7">
            <GlassCard 
              variant="subtle" 
              hover 
              className="relative overflow-hidden aspect-square group"
            >
              <Image
                src="/images/tactical-nightops-grid.jpg"
                alt="RESTLESS in night operations - tactical field conditions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Bottom gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                    Low-Light Operations
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  When Darkness Falls, Stay Sharp
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-md">
                  NVG-ready operators need fuel that performs as reliably as their gear.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right column - stacked info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {operationalScenes.map((scene, index) => (
              <GlassCard
                key={scene.label}
                variant="default"
                hover
                className="p-5 lg:p-6 group flex items-start gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/15 transition-all">
                  <scene.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground tracking-wide uppercase mb-1 group-hover:text-primary transition-colors">
                    {scene.label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {scene.caption}
                  </p>
                </div>

                {/* Index */}
                <span className="text-[10px] font-mono text-muted-foreground/30 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </GlassCard>
            ))}

            {/* CTA card */}
            <GlassCard variant="strong" shimmer className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Join 10,000+ operators who refuse to compromise
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider w-full group"
              >
                <Link href="https://restlessco.store/products/energy-blend?sca_ref=8594510.rAV4rrFMuXz">
                  GEAR UP
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
