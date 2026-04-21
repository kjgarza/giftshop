import { cn } from "@repo/utils"
import { waLink } from "@/lib/whatsapp"
import type { Service } from "@/content/services"
import { WhatsAppButton } from "@/components/whatsapp-button"

const iconMap: Record<Service["icon"], React.ReactNode> = {
  tag: (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 10 L10 26 L26 42 C27.1 43.1, 28.9 43.1, 30 42 L42 30 C43.1 28.9, 43.1 27.1, 42 26 L26 10 Z" stroke="#2E1A2B" strokeWidth="2" fill="#FDD1FF" fillOpacity="0.5" strokeLinejoin="round"/>
      <circle cx="17" cy="17" r="2.5" fill="#2E1A2B"/>
    </svg>
  ),
  ribbon: (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 24 C20 18, 10 14, 8 20 C6 26, 14 28, 24 24Z" stroke="#2E1A2B" strokeWidth="2" fill="#FFD1EA" fillOpacity="0.6"/>
      <path d="M24 24 C28 18, 38 14, 40 20 C42 26, 34 28, 24 24Z" stroke="#2E1A2B" strokeWidth="2" fill="#FDD1FF" fillOpacity="0.6"/>
      <path d="M24 24 C20 30, 10 34, 8 28 C6 22, 14 20, 24 24Z" stroke="#2E1A2B" strokeWidth="2" fill="#FFD1D3" fillOpacity="0.6"/>
      <path d="M24 24 C28 30, 38 34, 40 28 C42 22, 34 20, 24 24Z" stroke="#2E1A2B" strokeWidth="2" fill="#FFD1EA" fillOpacity="0.6"/>
      <circle cx="24" cy="24" r="3" fill="#2E1A2B"/>
    </svg>
  ),
  bow: (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 8 C16 8, 8 14, 8 24 C8 34, 16 40, 24 40 C32 40, 40 34, 40 24 C40 14, 32 8, 24 8Z" stroke="#2E1A2B" strokeWidth="2" fill="none"/>
      <path d="M24 8 L12 20 M24 8 L36 20 M24 40 L12 28 M24 40 L36 28" stroke="#2E1A2B" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="3" fill="#FFD1EA"/>
    </svg>
  ),
}

const cardColors = [
  { bg: "bg-rose/40", border: "border-rose" },
  { bg: "bg-bubblegum/40", border: "border-bubblegum" },
  { bg: "bg-lilac/40", border: "border-lilac" },
  { bg: "bg-rose/30", border: "border-rose" },
]

interface ServiceCardProps {
  service: Service
  index: number
  className?: string
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const colors = cardColors[index % cardColors.length]

  return (
    <div
      className={cn(
        "card-tilt group relative flex flex-col gap-4 overflow-hidden rounded-[14px] border-[1.5px] border-ink/10 p-6",
        colors.bg,
        className
      )}
      style={{
        backgroundImage: "url(/textures/paper.svg)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper/80 border border-ink/10 shadow-sm">
          {iconMap[service.icon]}
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-ink/40">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink/65">{service.description}</p>
      </div>

      <div className="mt-auto pt-2">
        <WhatsAppButton
          href={waLink(service.whatsappMessage)}
          variant="ghost"
          size="sm"
          className="w-full justify-center border-ink/15 bg-paper/60 hover:bg-paper"
        >
          Preguntar
        </WhatsAppButton>
      </div>
    </div>
  )
}
