import { shop } from "@/content/shop"
import { waLink } from "@/lib/whatsapp"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GradientBlobs } from "@/components/gradient-blobs"

export function ContactSection() {
  const defaultMessage = "¡Hola! Me gustaría preguntar por sus servicios."

  return (
    <section id="contacto" className="relative overflow-hidden bg-ribbon py-16 sm:py-20 lg:py-24">
      <GradientBlobs variant="hero" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-paper/50">
          Contáctanos
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-paper sm:text-6xl lg:text-7xl">
          ¿Tienes un regalo en mente?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/60 sm:mt-6 sm:text-lg">
          Escríbenos por WhatsApp y te ayudamos a encontrar lo que buscas. Sin complicaciones, con mucho cariño.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
          <WhatsAppButton
            href={waLink(defaultMessage)}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Escribir ahora
          </WhatsAppButton>
        </div>

        {/* Hours + social */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 border-t border-paper/10 pt-10 sm:mt-16 sm:flex-row sm:flex-wrap sm:pt-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/40 mb-2">
              Horarios
            </p>
            <ul className="flex flex-col gap-1">
              {shop.hours.map((h) => (
                <li key={h.label} className="text-sm text-paper/60">
                  <span className="font-semibold text-paper/80">{h.label}</span>
                  {" · "}
                  {h.hours}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/40 mb-2">
              Redes sociales
            </p>
            <div className="flex gap-4">
              <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-paper/60 hover:text-paper transition-colors">Instagram</a>
              <a href={shop.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-paper/60 hover:text-paper transition-colors">TikTok</a>
              <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-paper/60 hover:text-paper transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
