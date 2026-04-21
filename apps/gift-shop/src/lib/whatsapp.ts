import { shop } from "@/content/shop"

export function waLink(message: string): string {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(message)}`
}
