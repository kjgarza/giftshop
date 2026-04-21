import { cn } from "@repo/utils"

interface GradientBlobsProps {
  className?: string
  variant?: "hero" | "section"
}

export function GradientBlobs({ className, variant = "hero" }: GradientBlobsProps) {
  if (variant === "section") {
    return (
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFD1EA 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #FDD1FF 0%, transparent 70%)" }}
        />
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1EA 0%, #FDD1FF 40%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1D3 0%, #FFD1EA 50%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDD1FF 0%, transparent 60%)" }}
      />
    </div>
  )
}
