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
  brand: {
    name: "Gift Shop",
    headerAccent: "dulces de papel y regalos con drama",
    mobileThemePrompt: "elige tu estilo",
  },
  navLinks: [
    { href: "#featured", label: "Favoritos" },
    { href: "#about", label: "Nosotras" },
    { href: "#location", label: "Ubicación" },
    { href: "#newsletter", label: "Boletín" },
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
    eyebrow: "bazar de papelitos bonitos",
    locale: "Ciudad de México • alma de mercado • tienda en línea",
    scriptLead: "brillitos, listones y mini tesoros",
    titleMain: "Gift",
    titleAccent: "Shop",
    tagline: "Donde los sueños de papel se hacen realidad",
    description:
      "Un rincón de colores dulces lleno de libretas, papel para envolver, plumas, dijes y todas esas cositas lindas que vuelven un escritorio, un regalo o una nota en algo inolvidable.",
    ctaLabel: "Explora la repisa feliz",
    ctaHref: "#featured",
    highlightLabel: "envolturas, notitas de amor y antojitos de escritorio",
    featureChips: [
      { title: "precios chiquitos", detail: "desde €4", tone: "bg-[color:var(--card-blue)]", tilt: "rotate-[-3deg]" },
      { title: "tienda llenita", detail: "novedades cada semana", tone: "bg-[color:var(--card-peach)]", tilt: "rotate-[2deg]" },
      { title: "listo para regalar", detail: "moños, tags y brillito", tone: "bg-[color:var(--card-mint)]", tilt: "rotate-[-1deg]" },
    ],
    sideCards: {
      favoritesTitle: "favoritos de la tienda",
      favorites: [
        { emoji: "🎀", label: "paredes de listón", tone: "bg-[color:var(--card-pink)]" },
        { emoji: "🌈", label: "caos de color", tone: "bg-[color:var(--card-blue)]" },
      ],
      manifestoTitle: "Más es más",
      manifestoText:
        "Estantes repletos, precios escritos a mano, texturas de papel y mini hallazgos escondidos entre piezas grandotas y llamativas.",
      manifestoTags: ["energía de álbum", "corazón de mercado", "fiebre papelera"],
      bundleEyebrow: "combo de hoy",
      bundleTitle: "3 por 2",
      bundleText: "tarjetas + stickers + mini charms para pluma",
    },
  },
  marqueeItems: [
    "✏️ Tarjetas",
    "Envolturas",
    "Libretas",
    "Plumas",
    "Regalitos",
    "Calcomanías ✂️",
  ],
  featured: {
    scriptLead: "nuestras mini obsesiones",
    title: "Productos estrella en una cuadrícula gloriosamente llenita",
    description:
      "Tarjetitas inclinadas, badges pegajosos, precios chiquitos y demasiadas razones para llevarte una cosita más.",
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
    title: "Un bazar de papelito con alma de mercado",
    body:
      "Gift Shop nació como ese tipo de tienda donde el papel para envolver cuelga como banderitas de fiesta, las libretas se amontonan como pastelitos y cada etiqueta escrita a mano se siente personal. Mezclamos color juguetón con objetos de papel llenos de textura para que cada regalo y cada rincón del escritorio tenga más alegría.",
    quote:
      "“Cada repisa debería sentirse como una búsqueda del tesoro.”",
    quoteNote: "regla sagrada de la casa",
    sideEyebrow: "por qué la gente se tarda tanto",
    sideBody:
      "Porque siempre aparece una pluma más, una tarjeta más, otro carrete de listón y una cosita brillante que no viste al entrar.",
    stats: [
      { value: "120+", label: "pequeños antojos", tone: "bg-[color:var(--card-mint)]" },
      { value: "7", label: "días de tentación", tone: "bg-[color:var(--card-yellow)]" },
    ],
  },
  location: {
    eyebrow: "ven a darnos una vuelta",
    title: "Encuéntranos entre listones, papelitos y regalos apapachados",
    description:
      "Tenemos mostrador, mesitas llenas de detalles y una pared entera de cositas lindas para envolver. Pasa por tus favoritos o llega con tiempo para curiosear.",
    addressEyebrow: "dirección",
    hoursEyebrow: "horario",
    directionsLabel: "Cómo llegar",
  },
  newsletter: {
    scriptLead: "cartitas desde el escritorio bonito",
    title: "Únete para recibir novedades, combos lindos y chismecito papelero",
    label: "correo para recibir ternuritas",
    placeholder: "hola@mispapelitosbonitos.com",
    button: "Mándenme lo bonito",
  },
  footer: {
    name: "Gift Shop",
    tagline: "Donde los sueños de papel se hacen realidad, con color y con cariño.",
    socialLinks: [
      { label: "IG", href: "https://instagram.com", color: "bg-[color:var(--card-pink)]" },
      { label: "TT", href: "https://tiktok.com", color: "bg-[color:var(--card-lilac)]" },
      { label: "PI", href: "https://pinterest.com", color: "bg-[color:var(--card-yellow)]" },
      { label: "WA", href: "https://wa.me", color: "bg-[color:var(--card-mint)]" },
    ] satisfies HomeSocialLink[],
  },
} as const
