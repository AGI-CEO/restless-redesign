"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { GlassCard } from "@/components/effects/glass-card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Mike R.",
    role: "Law Enforcement, 12 Years",
    quote: "Finally found something that keeps me sharp during double shifts without making me feel wired. Game changer for night duty.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Sarah T.",
    role: "ER Nurse, Night Shift",
    quote: "No more coffee crashes at 3 AM. I stay focused and alert through my entire 12-hour shift. My patients deserve that.",
    rating: 5,
    avatar: "ST",
  },
  {
    name: "James K.",
    role: "Military Veteran, Personal Trainer",
    quote: "Clean energy that actually works. No jitters, no crash. Just steady performance when I need it most.",
    rating: 5,
    avatar: "JK",
  },
  {
    name: "David M.",
    role: "Fire Captain, 18 Years",
    quote: "When lives are on the line, I need to be at 100%. This keeps my mind clear and body ready. Trusted by my entire crew.",
    rating: 5,
    avatar: "DM",
  },
  {
    name: "Lisa P.",
    role: "Emergency Dispatcher",
    quote: "8 hours of non-stop calls requires unwavering focus. This is the only thing that works without the side effects.",
    rating: 5,
    avatar: "LP",
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Trusted by Operators
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            HEAR FROM <span className="text-gradient">THE FRONT LINES</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <GlassCard variant="strong" shimmer className="p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-primary/20" />
            </div>

            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-glass-border flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-foreground">
                  {testimonials[activeIndex].avatar}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-bold text-lg text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground font-mono">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              className="w-12 h-12 rounded-full glass hover:bg-glass-border/30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full glass hover:bg-glass-border/30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "4.9", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "100", label: "Day Guarantee" },
          ].map((stat) => (
            <GlassCard key={stat.label} variant="subtle" className="p-4 lg:p-6 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs lg:text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
