"use client"

import { cn } from "@/lib/utils"
import { forwardRef, type HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "strong"
  shimmer?: boolean
  glow?: boolean
  hover?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", shimmer = false, glow = false, hover = false, children, ...props }, ref) => {
    const variants = {
      default: "glass",
      subtle: "glass-subtle",
      strong: "glass-strong",
    }

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          "rounded-xl transition-all duration-300",
          shimmer && "shimmer",
          glow && "glow-pulse",
          hover && "hover:scale-[1.02] hover:shadow-[0_12px_40px_oklch(0_0_0/0.5)] hover:border-glass-border/40",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }
