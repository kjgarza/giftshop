"use client"

import { useEffect, useRef } from "react"

interface InstagramEmbedProps {
  url: string
  caption?: string
}

export function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const ref = useRef<HTMLDivElement>(null)
  const loaded = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded.current) {
          loaded.current = true
          observer.disconnect()

          const script = document.createElement("script")
          script.src = "//www.instagram.com/embed.js"
          script.async = true
          document.body.appendChild(script)

          script.onload = () => {
            const w = window as Window & { instgrm?: { Embeds: { process: () => void } } }
          if (w.instgrm) {
              w.instgrm.Embeds.process()
            }
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <blockquote
        className="instagram-media rounded-[14px] border border-ink/10 bg-paper"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ minWidth: "280px", width: "100%" }}
      />
      {caption && (
        <p className="text-center text-xs text-ink/50">{caption}</p>
      )}
    </div>
  )
}
