"use client"

export function LiquidGlassFilter() {
  return (
    <svg className="fixed w-0 h-0" aria-hidden="true">
      <defs>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="20s"
              values="0.01;0.015;0.01"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="3" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        
        {/* Glow filter */}
        <filter id="tactical-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Noise texture */}
        <filter id="noise-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            result="mono"
          />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
      </defs>
    </svg>
  )
}
