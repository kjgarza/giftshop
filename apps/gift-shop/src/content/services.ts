export type Service = {
  id: string
  title: string
  description: string
  icon: "tag" | "ribbon" | "bow"
  whatsappMessage: string
}

export const services: Service[] = [
  {
    id: "papeleria",
    title: "Papelería",
    description:
      "Cuadernos, libretas, plumas, stickers y todo lo que despierta la cabeza.",
    icon: "tag",
    whatsappMessage:
      "¡Hola! Me interesa ver qué tienen en papelería. ¿Me pueden mandar fotos?",
  },
  {
    id: "impresion",
    title: "Impresión y fotocopias",
    description:
      "Impresiones a color y blanco y negro, engargolados y fotocopias al momento.",
    icon: "tag",
    whatsappMessage:
      "¡Hola! Necesito imprimir unos documentos. ¿Cómo les mando el archivo?",
  },
  {
    id: "envoltura",
    title: "Envoltura de regalos",
    description:
      "Envolvemos tus regalos a mano, con moños, tarjetas y el detalle perfecto.",
    icon: "ribbon",
    whatsappMessage:
      "¡Hola! Quiero que me envuelvan un regalo. ¿Qué opciones tienen?",
  },
  {
    id: "papel-regalo",
    title: "Papel de regalo",
    description:
      "Pliegos por metro, bolsas decorativas y moños sueltos para que envuelvas tú.",
    icon: "bow",
    whatsappMessage:
      "¡Hola! Quiero comprar papel de regalo y moños. ¿Qué diseños tienen?",
  },
]
