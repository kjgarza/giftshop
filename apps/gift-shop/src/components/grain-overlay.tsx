export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        backgroundImage: "url(/textures/grain.svg)",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        opacity: 0.055,
        mixBlendMode: "overlay",
      }}
    />
  )
}
