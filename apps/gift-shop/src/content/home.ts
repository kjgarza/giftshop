export type HomeProduct = {
  name: string
  price: string
  emoji: string
  note: string
  badge?: string
  tone: string
  size: "large" | "medium" | "small"
  tilt: string
}

export type HomeSocialLink = {
  label: string
  href: string
  color: string
}

export const homeContent = {
  // Toggle whole page sections on/off. Nav links auto-hide when their
  // section is disabled (see navLinks `section` key + site-header filter).
  sections: {
    hero: true,
    featured: false, // product grid — not in use
    about: true,
    location: true,
    printing: true,
  },
  brand: {
    name: "Gift Shop",
    headerAccent: "Regalos y detalles que dan alegría",
    mobileThemePrompt: "elige tu estilo",
  },
  navLinks: [
    { href: "#featured", label: "Favoritos", section: "featured" },
    { href: "#about", label: "Nosotras", section: "about" },
    { href: "#location", label: "Ubicación", section: "location" },
    { href: "#printing", label: "Impresiones", section: "printing" },
  ],
  themeOptions: [
    { value: "candy-bazaar", label: "Dulce" },
    { value: "sunny-mercado", label: "Mercado" },
    { value: "midnight-bonbons", label: "Medianoche" },
    { value: "after-hours-neon", label: "Neón" },
  ],
  floatingDecorations: [
    { className: "floaty-star left-[4%] top-[7%]", symbol: "✦" },
    { className: "floaty-star right-[8%] top-[18%]", symbol: "✿" },
    { className: "floaty-star bottom-[18%] left-[10%]", symbol: "❋" },
    { className: "floaty-star bottom-[10%] right-[6%]", symbol: "✦" },
  ],
  hero: {
    eyebrow: "tienda de regalos bonitos",
    locale: "Monterrey, N.L. • alma de mercado • tienda en línea",
    scriptLead: "Mini tesoros que te harán sentir especial",
    titleMain: "Gift",
    titleAccent: "Shop",
    tagline: "Donde cada regalo se vuelve inolvidable",
    description:
      "Un rincón de colores dulces lleno de regalos, detalles, accesorios y todas esas cositas lindas que vuelven una sorpresa, un agradecimiento o un cumpleaños en algo inolvidable.",
    ctaLabel: "Explora la repisa feliz",
    ctaHref: "#featured",
    highlightLabel: "regalos, envolturas y detalles para sorprender",
    promoLabel: "Promo de temporada",
    // promoText: "Al comprar un pequeño detalle para regalar, la envoltura al 35% de descuento.",
    promoText: "",
    featureChips: [
      { title: "novedades", detail: "cada semana", tone: "bg-[color:var(--card-peach)]", tilt: "rotate-[2deg]" },
      { title: "listo para regalar", detail: "moños, tarjetas y envoltura", tone: "bg-[color:var(--card-mint)]", tilt: "rotate-[-1deg]" },
    ],
    sideCards: {
      favoritesTitle: "favoritos de la tienda",
      favorites: [
        { emoji: "🎀", label: "envoltura", description: "papel, bolsas y cajas", tone: "bg-[color:var(--card-pink)]" },
        { emoji: "🎁", label: "detalles", description: "para cada ocasión", tone: "bg-[color:var(--card-blue)]" },
      ],
      bundleEyebrow: "listo para regalar",
      bundleTitle: "En minutos",
      bundleText: "moños, tarjetas y brillito para tu regalo",
    },
  },
  marqueeItems: [
    "🎁 Regalos",
    "Envolturas",
    "Detalles",
    "Tarjetas",
  ],
  featured: {
    scriptLead: "nuestras mini obsesiones",
    title: "Productos estrella en una cuadrícula gloriosamente llenita",
    description:
      "Tarjetitas inclinadas, badges pegajosos y demasiadas razones para llevarte una cosita más.",
    bodyCopy: [
      "Bolsas, cajas, moños, papel y todo para envolver tus regalos bonito encuentras.",
      "Todo lo que necesitas para hacer que tu regalo luzca increíble. 🎁",
    ],
  },
  products: [
    {
      name: "Libreta Nube de Azúcar",
      price: "€12",
      emoji: "📓",
      note: "hojas gruesitas + portadas suaves",
      badge: "FAVORITO",
      tone: "bg-[color:var(--card-pink)]",
      size: "large",
      tilt: "-rotate-2",
    },
    {
      name: "Lápices Confeti",
      price: "€6",
      emoji: "✏️",
      note: "seis colores, puntita feliz",
      badge: "NUEVO",
      tone: "bg-[color:var(--card-yellow)]",
      size: "small",
      tilt: "rotate-2",
    },
    {
      name: "Set de Tarjetas Mercado",
      price: "€14",
      emoji: "💌",
      note: "para cumpleaños, amores y gracias",
      tone: "bg-[color:var(--card-lilac)]",
      size: "medium",
      tilt: "-rotate-1",
    },
    {
      name: "Sticker Bomb Frutal",
      price: "€8",
      emoji: "🍓",
      note: "hojitas llenas de mini tesoros",
      badge: "♥",
      tone: "bg-[color:var(--card-mint)]",
      size: "small",
      tilt: "rotate-3",
    },
    {
      name: "Pluma Gel Estelar",
      price: "€5",
      emoji: "🖊️",
      note: "brilla sobre sobres crema y lila",
      tone: "bg-[color:var(--card-blue)]",
      size: "medium",
      tilt: "-rotate-3",
    },
    {
      name: "Wrap Fiesta Infinita",
      price: "€9",
      emoji: "🎀",
      note: "papel de regalo en capas y lunares",
      badge: "ÉXITO",
      tone: "bg-[color:var(--card-coral)]",
      size: "large",
      tilt: "rotate-1",
    },
    {
      name: "Caja Mini Sorpresa",
      price: "€11",
      emoji: "🎁",
      note: "para detalles diminutos pero dramáticos",
      tone: "bg-[color:var(--card-peach)]",
      size: "medium",
      tilt: "-rotate-2",
    },
    {
      name: "Post-its Caramelo",
      price: "€4",
      emoji: "🗒️",
      note: "pegajositos, dulces y ordenados",
      tone: "bg-[color:var(--card-mint)]",
      size: "small",
      tilt: "rotate-2",
    },
    {
      name: "Sellos Corazón Club",
      price: "€10",
      emoji: "💖",
      note: "para cerrar cartas con teatralidad",
      badge: "NUEVO",
      tone: "bg-[color:var(--card-pink)]",
      size: "medium",
      tilt: "-rotate-1",
    },
    {
      name: "Agenda Jardín Maximal",
      price: "€18",
      emoji: "🌼",
      note: "una agenda que parece altar de escritorio",
      tone: "bg-[color:var(--card-yellow)]",
      size: "large",
      tilt: "rotate-2",
    },
  ] satisfies HomeProduct[],
  about: {
    eyebrow: "sobre nosotras",
    title: "Una tienda de regalos con alma de mercado",
    body:
      "Gift Shop es ese tipo de tienda donde cada etiqueta escrita a mano se siente personal y siempre hay un detalle que no viste al entrar. Color juguetón y regalos con textura para que cada sorpresa tenga más alegría.",
    quote:
      "“Cada repisa debería sentirse como una búsqueda del tesoro.”",
    quoteNote: "regla sagrada de la casa",
    stats: [
      { value: "120+", label: "pequeños antojos", tone: "bg-[color:var(--card-mint)]" },
      { value: "7", label: "días de tentación", tone: "bg-[color:var(--card-yellow)]" },
    ],
  },
  location: {
    eyebrow: "ven a darnos una vuelta",
    title: "Encuéntranos entre listones y regalos apapachados",
    // description:
    //   "Tenemos mostrador, mesitas llenas de detalles y una pared entera de cositas lindas para envolver. Pasa por tus favoritos o llega con tiempo para curiosear.",
    description: "",
    addressEyebrow: "dirección",
    hoursEyebrow: "horario",
    directionsLabel: "Cómo llegar",
  },
  printing: {
    scriptLead: "impresiones y copias",
    title: "Envíanos tus archivos y los dejamos listos",
    description:
      "Mándanos PDFs, fotos o documentos por correo y los imprimimos o fotocopiamos por ti.",
    details: [
      "Adjunta los archivos al correo.",
      "Dinos cantidad y si van a color o blanco y negro.",
      "Agrega tamaño, acabado o engrapado si aplica.",
    ],
    cta: "Enviar por correo",
  },
  footer: {
    name: "Gift Shop",
    tagline: "Donde cada regalo se vuelve inolvidable, con color y con cariño.",
    socialLinks: [
      { label: "IG", href: "https://www.instagram.com/gift_shopmty", color: "bg-[color:var(--card-pink)]" },
      { label: "TT", href: "https://tiktok.com", color: "bg-[color:var(--card-lilac)]" },
      { label: "PI", href: "https://pinterest.com", color: "bg-[color:var(--card-yellow)]" },
      { label: "WA", href: "https://wa.me", color: "bg-[color:var(--card-mint)]" },
    ] satisfies HomeSocialLink[],
  },
} as const
