"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/effects/glass-card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "K.W.",
    product: "Performance Energy Blend",
    quote: "I've tried a lot of different energy drinks over the years, and most of them come with the same problems—too much sugar, a jittery buzz, and the inevitable crash a couple of hours later. Restless is different.",
    rating: 5,
  },
  {
    name: "M.B.",
    product: "Performance Energy Blend",
    quote: "RESTLESS is the cleanest, most effective energy blend I've tried. Smooth, jitter-free power, long-lasting focus, and zero crash. It mixes well, tastes great, and actually improves performance. As a Single dad of two and a Marine Corps Drill Instructor with a demanding lifestyle, this formula delivers exactly what it promises. A true game changer.",
    rating: 5,
  },
  {
    name: "M.",
    product: "Performance Energy Blend",
    quote: "Restless has absolutely changed the game for me. I've been powering through back to back 12 hour shifts for weeks now and this stuff is not just helpful, but it has been my daily backbone. Instead of chasing that quick spike of energy from sugary drinks that leaves me crashing later, Restless delivers steady, clean, crash free energy that actually lasts all day long.",
    rating: 5,
  },
  {
    name: "D.R.",
    product: "Performance Energy Blend",
    quote: "The long days of running around in the high desert or diving in pacific are over for me, but my life's demands haven't let up. This supplement is perfect for when I need a 2 pm boost to finish the work day, get in the workout, and come home ready to play tag with the kids. No jitters, anxious energy, or affect on my sleep.",
    rating: 5,
  },
  {
    name: "Z.U.",
    product: "Performance Energy Blend",
    quote: "Restless kept me in the fight during a long nights work. For the first time I was able to get through the shift without feeling drowsy or crashing. The taste of Restless is also a plus because to me it tastes like a popsicle on a summer's day!",
    rating: 5,
  },
  {
    name: "P.P.",
    product: "Performance Energy Blend",
    quote: "Clean, steady energy without the crash or jitters. You can feel the difference compared to typical energy drink.",
    rating: 5,
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs tracking-widest text-primary uppercase mb-4">
            4.98 Stars (149 Reviews)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            DON&apos;T TAKE OUR WORD FOR IT, <span className="text-gradient">TAKE THEIRS</span>
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
              {/* Verified Badge */}
              <span className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">Verified</span>

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
                  {testimonials[activeIndex].product}
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
            { value: "120+", label: "5-Star Reviews" },
            { value: "4.98", label: "Average Rating" },
            { value: "100", label: "Day Guarantee" },
            { value: "15%", label: "Off First Order" },
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
