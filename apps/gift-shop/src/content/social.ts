export type InstagramItem = {
  platform: "instagram"
  url: string
  caption?: string
}

export type TikTokItem = {
  platform: "tiktok"
  videoId: string
  caption?: string
}

export type FacebookItem = {
  platform: "facebook"
  url: string
  caption?: string
}

export type SocialItem = InstagramItem | TikTokItem | FacebookItem

export const socialItems: SocialItem[] = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/p/placeholder1/",
    caption: "Envolturas de Día de las Madres",
  },
  {
    platform: "tiktok",
    videoId: "0000000000000000000",
    caption: "Cómo armamos un moño a mano",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/p/placeholder2/",
    caption: "Nuevas libretas pastel",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/papeleriaaves/posts/placeholder",
    caption: "Taller de papel picado",
  },
]
