"use client"

import { GlassCard } from "@/components/effects/glass-card"
import { Button } from "@/components/ui/button"
import { Zap, Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "All Products", href: "#" },
    { label: "Subscribe & Save", href: "#" },
    { label: "Gift Cards", href: "#" },
    { label: "Bulk Orders", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "#" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Track Order", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

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
                JOIN THE <span className="text-primary">MISSION</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                Get exclusive offers, performance tips, and early access to new products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-input border border-glass-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide px-6 py-3 group">
                SUBSCRIBE
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                RESTLESS
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Performance energy for those who stay in the fight. Trusted by first responders, military, and athletes worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
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
              &copy; {new Date().getFullYear()} Restless Co. All rights reserved.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center gap-4">
              {["Informed Sport", "Made in USA", "GMP Certified"].map((cert) => (
                <span key={cert} className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-[10px] text-muted-foreground/50 text-center mt-6 max-w-4xl mx-auto leading-relaxed">
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before starting any supplement program.
          </p>
        </div>
      </div>
    </footer>
  )
}
