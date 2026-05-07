"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Shield, Crosshair } from "lucide-react"

export function FieldTestedSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed cinematic image */}
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/images/tactical-rain-product.jpg"
          alt="RESTLESS Performance Energy Blend in tactical field conditions"
          fill
          className="object-cover"
          priority
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
        
        {/* Film grain effect */}
        <div className="absolute inset-0 noise opacity-40 pointer-events-none" />

        {/* Scanline overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />

        {/* Content positioned at bottom */}
        <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-16 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                <Crosshair className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-primary uppercase">
                  Field Tested
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
                <span className="text-foreground">BUILT FOR </span>
                <span className="text-gradient">THE MISSION</span>
              </h2>

              {/* Body */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                From the ruck to the range. Restless was formulated alongside operators 
                who demand clean energy that performs when it matters most — no crash, 
                no jitters, no compromise.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider px-8 py-6 text-base group shimmer"
                >
                  <Link href="https://restlessco.store/products/energy-blend?sca_ref=8594510.rAV4rrFMuXz">
                    SHOP NOW
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono">100-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HUD corner accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl hidden lg:block" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-xl hidden lg:block" />
        
        {/* Tactical coordinates (desktop only) */}
        <div className="absolute top-8 right-10 hidden lg:block">
          <div className="text-[10px] font-mono text-primary/40 tracking-wider text-right space-y-0.5">
            <div>LAT 33.7490° N</div>
            <div>LON 84.3880° W</div>
            <div className="text-muted-foreground/30">FLD-TST // ACTIVE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
