"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  useConversationControls,
  useConversationStatus,
  useConversationMode,
  useConversationInput,
} from "@elevenlabs/react"
import { Radio, MicOff, Mic, PhoneOff, X } from "lucide-react"

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID

// ─── Waveform Visualizer ────────────────────────────────────────────────────
function WaveformCanvas({
  getFrequencyData,
  isActive,
  color,
}: {
  getFrequencyData: (() => Uint8Array | null) | undefined
  isActive: boolean
  color: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const draw = () => {
      const data = isActive && getFrequencyData ? getFrequencyData() : null
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      const bars = 32
      const barWidth = w / bars - 2
      const maxHeight = h * 0.85

      for (let i = 0; i < bars; i++) {
        const value = data ? data[Math.floor((i / bars) * (data.length || 1))] || 0 : 0
        // Normalize 0-255 to 0-1, then add a small idle jitter
        const normalized = isActive ? value / 255 : Math.random() * 0.08
        const barHeight = Math.max(2, normalized * maxHeight)

        const x = i * (barWidth + 2)
        const y = h - barHeight

        ctx.fillStyle = color
        ctx.globalAlpha = isActive ? 0.6 + normalized * 0.4 : 0.15
        ctx.fillRect(x, y, barWidth, barHeight)
      }
      ctx.globalAlpha = 1

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [getFrequencyData, isActive, color])

  return (
    <canvas
      ref={canvasRef}
      width={256}
      height={64}
      className="w-full h-16 rounded"
    />
  )
}

// ─── Main FAB Component ─────────────────────────────────────────────────────
export function TacticalRadioFab() {
  // Hide entirely if no agent ID is configured
  if (!AGENT_ID) return null

  return <TacticalRadioFabInner />
}

function TacticalRadioFabInner() {
  const { startSession, endSession, getOutputByteFrequencyData, getInputByteFrequencyData } =
    useConversationControls()
  const { status } = useConversationStatus()
  const { isSpeaking } = useConversationMode()
  const { isMuted, setMuted } = useConversationInput()

  const [panelOpen, setPanelOpen] = useState(false)
  const [isStarting, setIsStarting] = useState(false)

  const isConnected = status === "connected"
  const isConnecting = status === "connecting" || isStarting

  // Start the conversation
  const handleActivate = useCallback(async () => {
    if (isConnected || isConnecting) {
      // Toggle panel visibility if already connected
      setPanelOpen((p) => !p)
      return
    }

    try {
      setIsStarting(true)
      setPanelOpen(true)
      await startSession({ agentId: AGENT_ID! })
    } catch (err) {
      console.error("[TACTICAL COMMS] Failed to establish connection:", err)
      setPanelOpen(false)
    } finally {
      setIsStarting(false)
    }
  }, [isConnected, isConnecting, startSession])

  // End the conversation
  const handleEndTransmission = useCallback(async () => {
    try {
      await endSession()
    } catch (err) {
      console.error("[TACTICAL COMMS] Failed to end session:", err)
    }
    setPanelOpen(false)
  }, [endSession])

  // Close panel (minimize) without ending session
  const handleMinimize = useCallback(() => {
    setPanelOpen(false)
  }, [])

  // Keep panel open when connected
  useEffect(() => {
    if (isConnected) {
      setPanelOpen(true)
    }
  }, [isConnected])

  // When disconnected externally, close panel
  useEffect(() => {
    if (status === "disconnected" && !isStarting) {
      setPanelOpen(false)
    }
  }, [status, isStarting])

  // Determine which frequency data to show
  const getActiveFrequencyData = isSpeaking
    ? getOutputByteFrequencyData
    : getInputByteFrequencyData

  return (
    <>
      {/* ── Radio Panel ─────────────────────────────────────────────── */}
      <div
        className={`
          fixed bottom-24 right-6 z-50 w-80
          transition-all duration-300 ease-out origin-bottom-right
          ${panelOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <div className="relative glass-strong rounded-xl overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50 rounded-tl-md" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50 rounded-tr-md" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50 rounded-bl-md" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50 rounded-br-md" />

          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div className="flex items-center gap-2.5">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-foreground uppercase">
                Tactical Comms
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* Status indicator */}
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isConnected
                      ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                      : isConnecting
                        ? "bg-amber-500 animate-pulse shadow-[0_0_6px_rgba(245,158,11,0.6)]"
                        : "bg-red-500/60"
                  }`}
                />
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  {isConnected ? "Online" : isConnecting ? "Linking" : "Offline"}
                </span>
              </div>
              {/* Minimize button */}
              <button
                onClick={handleMinimize}
                className="p-1 rounded hover:bg-white/10 transition-colors"
                aria-label="Minimize comms panel"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Waveform */}
          <div className="px-4 pt-3 pb-2">
            <WaveformCanvas
              getFrequencyData={getActiveFrequencyData}
              isActive={isConnected}
              color="oklch(0.65 0.18 145)"
            />
          </div>

          {/* TX/RX Indicator */}
          <div className="px-4 pb-2">
            <div className="flex items-center justify-center gap-3">
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-200 ${
                  isConnected && !isSpeaking
                    ? "bg-red-500/20 text-red-400 border border-red-500/30 radio-tx-blink"
                    : "bg-muted/30 text-muted-foreground/40 border border-transparent"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isConnected && !isSpeaking ? "bg-red-400" : "bg-muted-foreground/30"}`} />
                TX
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-200 ${
                  isConnected && isSpeaking
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-muted/30 text-muted-foreground/40 border border-transparent"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isConnected && isSpeaking ? "bg-primary" : "bg-muted-foreground/30"}`} />
                RX
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-4 pb-4 pt-1">
            <div className="flex items-center justify-center gap-3">
              {/* Mute toggle */}
              <button
                onClick={() => setMuted(!isMuted)}
                disabled={!isConnected}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider
                  transition-all duration-200 uppercase
                  ${
                    isMuted
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30"
                      : "bg-muted/40 text-foreground/80 border border-glass-border hover:bg-muted/60"
                  }
                  disabled:opacity-30 disabled:cursor-not-allowed
                `}
                aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
              >
                {isMuted ? (
                  <MicOff className="w-3.5 h-3.5" />
                ) : (
                  <Mic className="w-3.5 h-3.5" />
                )}
                {isMuted ? "Muted" : "Mic On"}
              </button>

              {/* End transmission */}
              <button
                onClick={handleEndTransmission}
                disabled={!isConnected && !isConnecting}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider
                  bg-red-500/20 text-red-400 border border-red-500/30
                  hover:bg-red-500/30 transition-all duration-200 uppercase
                  disabled:opacity-30 disabled:cursor-not-allowed
                `}
                aria-label="End transmission"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                End
              </button>
            </div>
          </div>

          {/* Frequency label */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground/50 uppercase tracking-widest">
              <span>CH-01 // RESTLESS</span>
              <span>ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAB Button ──────────────────────────────────────────────── */}
      <button
        onClick={handleActivate}
        className={`
          fixed bottom-6 right-6 z-50
          flex flex-col items-center gap-1.5
          group
        `}
        aria-label="Open tactical communications"
      >
        {/* Pulse rings (idle only) */}
        {!isConnected && !isConnecting && (
          <>
            <div className="absolute inset-0 m-auto w-14 h-14 rounded-full border border-primary/20 radio-pulse-ring" />
            <div className="absolute inset-0 m-auto w-14 h-14 rounded-full border border-primary/10 radio-pulse-ring [animation-delay:1s]" />
          </>
        )}

        {/* Main button */}
        <div
          className={`
            relative w-14 h-14 rounded-full flex items-center justify-center
            transition-all duration-300
            ${
              isConnected
                ? "bg-primary/30 border-2 border-primary shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                : isConnecting
                  ? "bg-amber-500/20 border-2 border-amber-500/50 animate-pulse"
                  : "glass border border-glass-border group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            }
          `}
        >
          <Radio
            className={`w-6 h-6 transition-colors duration-300 ${
              isConnected
                ? "text-primary"
                : isConnecting
                  ? "text-amber-400"
                  : "text-muted-foreground group-hover:text-primary"
            }`}
          />

          {/* Active indicator dot */}
          {isConnected && (
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
          )}
        </div>

        {/* Label */}
        <span
          className={`text-[9px] font-mono font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
            isConnected
              ? "text-primary"
              : "text-muted-foreground/60 group-hover:text-muted-foreground"
          }`}
        >
          {isConnected ? "LIVE" : isConnecting ? "LINKING" : "COMMS"}
        </span>
      </button>
    </>
  )
}
