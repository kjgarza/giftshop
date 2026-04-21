import { socialItems } from "@/content/social"
import { InstagramEmbed } from "./instagram-embed"
import { TikTokEmbed } from "./tiktok-embed"
import { FacebookEmbed } from "./facebook-embed"
import { RibbonDivider } from "@/components/ui/ribbon-divider"
import { shop } from "@/content/shop"

export function SocialGallery() {
  return (
    <section id="social" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Síguenos
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            En redes sociales
          </h2>
          <RibbonDivider className="max-w-xs" />
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={shop.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink/60 hover:text-ink transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href={shop.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink/60 hover:text-ink transition-colors"
            >
              TikTok ↗
            </a>
            <a
              href={shop.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink/60 hover:text-ink transition-colors"
            >
              Facebook ↗
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {socialItems.map((item, i) => {
            if (item.platform === "instagram") {
              return (
                <InstagramEmbed key={i} url={item.url} caption={item.caption} />
              )
            }
            if (item.platform === "tiktok") {
              return (
                <TikTokEmbed key={i} videoId={item.videoId} caption={item.caption} />
              )
            }
            return (
              <FacebookEmbed key={i} url={item.url} caption={item.caption} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
