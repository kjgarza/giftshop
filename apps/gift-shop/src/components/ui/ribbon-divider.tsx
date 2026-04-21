import { cn } from "@repo/utils"

interface RibbonDividerProps {
  className?: string
}

export function RibbonDivider({ className }: RibbonDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 py-2", className)} aria-hidden="true">
      <div className="h-px flex-1 bg-ink/10" />
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10 C12 6, 4 4, 2 8 C0 12, 6 13, 16 10Z" fill="#FFD1EA" stroke="#2E1A2B" strokeWidth="1" />
        <path d="M16 10 C20 6, 28 4, 30 8 C32 12, 26 13, 16 10Z" fill="#FDD1FF" stroke="#2E1A2B" strokeWidth="1" />
        <path d="M16 10 C12 14, 4 16, 2 12 C0 8, 6 7, 16 10Z" fill="#FFD1D3" stroke="#2E1A2B" strokeWidth="1" />
        <path d="M16 10 C20 14, 28 16, 30 12 C32 8, 26 7, 16 10Z" fill="#FFD1EA" stroke="#2E1A2B" strokeWidth="1" />
        <circle cx="16" cy="10" r="2" fill="#2E1A2B" />
      </svg>
      <div className="h-px flex-1 bg-ink/10" />
    </div>
  )
}
