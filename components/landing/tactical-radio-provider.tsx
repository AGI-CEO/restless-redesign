"use client"

import { ConversationProvider } from "@elevenlabs/react"

export function TacticalRadioProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConversationProvider>
      {children}
    </ConversationProvider>
  )
}
