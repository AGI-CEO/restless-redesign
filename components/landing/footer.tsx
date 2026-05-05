"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { label: "Partnerships", href: "#" },
    { label: "Referral Program", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Military Discount", href: "#" },
    { label: "First Responder Discount", href: "#" },
    { label: "Student Discount", href: "#" },
  ],
  learn: [
    { label: "Science", href: "#" },
    { label: "Stay In The Fight", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Reviews", href: "#reviews" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "100 Day Guarantee", href: "#" },
    { label: "Account & Subscription Login", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background" />
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <GlassCard variant="strong" className="p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-foreground">
                Be the first to know
              </h3>
              <p className="text-muted-foreground max-w-md">
                Sign up today and get special product releases and exclusive sales!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-3 bg-input border border-glass-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide px-6 py-3 group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors">
                <span className="font-mono text-primary font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                RESTLESS
              </span>
            </a>
            <p className="text-lg font-semibold text-foreground mb-2">Stay In The Fight</p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Learn</h4>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; 2026, Restless Co
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              {["Refund Policy", "Privacy Policy", "Contact Us"].map((link) => (
                <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
