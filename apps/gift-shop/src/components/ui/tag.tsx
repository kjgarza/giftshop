import { cn } from "@repo/utils"

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: "rose" | "bubblegum" | "lilac"
}

const variantStyles = {
  rose: "bg-rose text-ink",
  bubblegum: "bg-bubblegum text-ink",
  lilac: "bg-lilac text-ink",
}

export function Tag({ children, className, variant = "bubblegum" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
