import { cn } from "@repo/utils"

interface BadgeStickerProps {
  children: React.ReactNode
  className?: string
  rotate?: number
}

export function BadgeSticker({ children, className, rotate = 0 }: BadgeStickerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-[14px] border-[1.5px] border-ink bg-bubblegum px-4 py-2 text-sm font-semibold text-ink shadow-sm",
        className
      )}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </div>
  )
}
