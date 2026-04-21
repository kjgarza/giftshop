"use client"

import { useRef, useState } from "react"

interface TikTokEmbedProps {
  videoId: string
  caption?: string
}

export function TikTokEmbed({ videoId, caption }: TikTokEmbedProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div
        className="relative overflow-hidden rounded-[14px] border border-ink/10 bg-paper"
        style={{ paddingTop: "177.78%" }}
      >
        {!visible ? (
          <button
            onClick={() => setVisible(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bubblegum/20 transition-colors hover:bg-bubblegum/40"
            aria-label="Cargar video de TikTok"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#2E1A2B"/>
              <path d="M16 13 L30 20 L16 27 Z" fill="#FFF8FB"/>
            </svg>
            <span className="text-sm font-semibold text-ink/70">Ver en TikTok</span>
          </button>
        ) : (
          <iframe
            src={`https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1`}
            allow="fullscreen"
            className="absolute inset-0 h-full w-full"
            title={caption ?? "TikTok video"}
          />
        )}
      </div>
      {caption && (
        <p className="text-center text-xs text-ink/50">{caption}</p>
      )}
    </div>
  )
}
