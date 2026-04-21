import { shop } from "@/content/shop"
import { RibbonDivider } from "@/components/ui/ribbon-divider"

export function LocationSection() {
  const { address, hours, mapEmbedUrl, mapDirectionsUrl } = shop

  return (
    <section id="ubicacion" className="relative bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Dónde estamos
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            Ubicación y horarios
          </h2>
          <RibbonDivider className="max-w-xs" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Map */}
          <div className="overflow-hidden rounded-[14px] border border-ink/10 shadow-sm aspect-[4/3]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Gift Shop"
            />
          </div>

          {/* Info card */}
          <div className="flex flex-col gap-6 rounded-[14px] border border-ink/10 bg-bubblegum/20 p-5 sm:p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-1">
                Dirección
              </h3>
              <p className="text-ink/70 leading-relaxed">
                {address.street}
                <br />
                {address.neighborhood}
                <br />
                {address.city}, C.P. {address.postalCode}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">
                Horarios
              </h3>
              <ul className="flex flex-col gap-2">
                {hours.map((h) => (
                  <li key={h.label} className="flex justify-between text-sm">
                    <span className="font-semibold text-ink">{h.label}</span>
                    <span className="text-ink/60">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ribbon px-6 text-sm font-semibold text-paper transition-all hover:bg-ribbon/90 sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
