export type BusinessHours = {
  label: string
  hours: string
}

export const shop = {
  name: "Gift Shop",
  tagline: "Papelería y envoltura con cariño",
  whatsappNumber: "528126337674",
  instagramHandle: "giftshop",
  tiktokHandle: "giftshop",
  facebookPage: "giftshop",
  email: "hola@giftshop.mx",
  address: {
    street: "Av 5 851-849",
    neighborhood: "Hacienda los Morales 3er Sector",
    city: "Monterrey, N.L., Mexico",
    postalCode: "66495",
  },
  hours: [
    { label: "Lunes a Viernes", hours: "9:00 — 20:00" },
    { label: "Sábado", hours: "10:00 — 19:00" },
    { label: "Domingo", hours: "11:00 — 15:00" },
  ] as BusinessHours[],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av+5+851-849,+Hacienda+los+Morales+3er+Sector,+66495+Monterrey,+N.L.,+Mexico&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av+5+851-849,+Hacienda+los+Morales+3er+Sector,+66495+Monterrey,+N.L.,+Mexico",
  instagramUrl: "https://www.instagram.com/giftshop",
  tiktokUrl: "https://www.tiktok.com/@giftshop",
  facebookUrl: "https://www.facebook.com/giftshop",
} as const
