export type BusinessHours = {
  label: string
  hours: string
}

export const shop = {
  name: "Gift Shop",
  tagline: "Papelería y envoltura con cariño",
  whatsappNumber: "5215555555555",
  instagramHandle: "giftshop",
  tiktokHandle: "giftshop",
  facebookPage: "giftshop",
  email: "hola@giftshop.mx",
  address: {
    street: "Av. Revolución 1234, Local 5",
    neighborhood: "Colonia San Ángel",
    city: "Ciudad de México",
    postalCode: "01000",
  },
  hours: [
    { label: "Lunes a Viernes", hours: "9:00 — 20:00" },
    { label: "Sábado", hours: "10:00 — 19:00" },
    { label: "Domingo", hours: "11:00 — 15:00" },
  ] as BusinessHours[],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123!2d-99.1915!3d19.3459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIwJzQ1LjIiTiA5OcKwMTEnMjkuNCJX!5e0!3m2!1ses-MX!2smx!4v0000000000000",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Gift+Shop",
  instagramUrl: "https://www.instagram.com/giftshop",
  tiktokUrl: "https://www.tiktok.com/@giftshop",
  facebookUrl: "https://www.facebook.com/giftshop",
} as const
