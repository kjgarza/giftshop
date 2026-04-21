import { services } from "@/content/services"
import { ServiceCard } from "./service-card"
import { RibbonDivider } from "@/components/ui/ribbon-divider"
import { GradientBlobs } from "@/components/gradient-blobs"

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
      <GradientBlobs variant="section" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Lo que hacemos
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            Servicios
          </h2>
          <RibbonDivider className="max-w-xs" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
