"use client"

import { useState } from "react"

interface FacebookEmbedProps {
  url: string
  caption?: string
}

export function FacebookEmbed({ url, caption }: FacebookEmbedProps) {
  const [visible, setVisible] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const embedSrc = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&width=500&show_text=true`

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-[14px] border border-ink/10 bg-paper">
        {!visible ? (
          <button
            onClick={() => setVisible(true)}
            className="flex w-full flex-col items-center justify-center gap-3 p-8 transition-colors hover:bg-bubblegum/20"
            aria-label="Cargar publicación de Facebook"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#1877F2"/>
              <path d="M21.5 16H18V14c0-0.8.4-1.5 1.8-1.5H22V9.5S20.6 9 19.2 9C16.4 9 14.5 10.7 14.5 13.7V16H11.5V19.5H14.5V28H18V19.5H21Z" fill="white"/>
            </svg>
            <span className="text-sm font-semibold text-ink/70">Ver en Facebook</span>
          </button>
        ) : (
          <iframe
            src={embedSrc}
            width="100%"
            height="400"
            className="border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title={caption ?? "Facebook post"}
          />
        )}
      </div>
      {caption && (
        <p className="text-center text-xs text-ink/50">{caption}</p>
      )}
    </div>
  )
}
