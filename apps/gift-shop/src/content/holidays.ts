export type HolidayType = "major" | "common" | "optional" | "cultural"

export type HolidayWindow = {
  start: Date
  end: Date
}

export type Holiday = {
  id: string
  nameEs: string
  nameEn: string
  type: HolidayType
  image: string
  headlineEs: string
  subheadlineEs: string
  whatsappMessage: string
  window: (year: number) => HolidayWindow
}

const LEAD_DAYS = 10

function atMidnight(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day, 0, 0, 0, 0)
}

function endOfDay(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day, 23, 59, 59, 999)
}

function windowBefore(year: number, month: number, day: number): HolidayWindow {
  const holidayDate = atMidnight(year, month, day)
  const start = new Date(holidayDate)
  start.setDate(start.getDate() - LEAD_DAYS)
  return { start, end: endOfDay(year, month, day) }
}

function windowRange(
  year: number,
  startM: number,
  startD: number,
  endM: number,
  endD: number,
): HolidayWindow {
  const anchor = atMidnight(year, startM, startD)
  const start = new Date(anchor)
  start.setDate(start.getDate() - LEAD_DAYS)
  return { start, end: endOfDay(year, endM, endD) }
}

function thirdSundayOfJune(year: number): Date {
  const june1 = new Date(year, 5, 1)
  const dow = june1.getDay()
  const firstSundayDay = dow === 0 ? 1 : 8 - dow
  const thirdSundayDay = firstSundayDay + 14
  return atMidnight(year, 6, thirdSundayDay)
}

export const holidays: Holiday[] = [
  {
    id: "reyes",
    nameEs: "Día de Reyes",
    nameEn: "Three Kings Day",
    type: "major",
    image: "/hero/reyes.svg",
    headlineEs: "Regalos para los Reyes Magos",
    subheadlineEs:
      "Envoltura y detalles listos para la rosca. Pide por WhatsApp antes del 6 de enero.",
    whatsappMessage:
      "¡Hola! Me interesa preparar regalos para Día de Reyes. ¿Me pueden ayudar?",
    window: (year) => windowBefore(year, 1, 6),
  },
  {
    id: "nino",
    nameEs: "Día del Niño",
    nameEn: "Children's Day",
    type: "common",
    image: "/hero/nino.svg",
    headlineEs: "Sorpresas para el Día del Niño",
    subheadlineEs:
      "Papelería divertida, envolturas con confeti y detalles que emocionan.",
    whatsappMessage:
      "¡Hola! Quiero algo especial para Día del Niño. ¿Qué me recomiendan?",
    window: (year) => windowBefore(year, 4, 30),
  },
  {
    id: "madres",
    nameEs: "Día de las Madres",
    nameEn: "Mother's Day",
    type: "major",
    image: "/hero/madres.svg",
    headlineEs: "Para la mejor mamá del mundo",
    subheadlineEs:
      "Envolturas con flores, tarjetas escritas a mano y regalos con alma.",
    whatsappMessage:
      "¡Hola! Busco un regalo bonito para mi mamá. ¿Me ayudan a elegir?",
    window: (year) => windowBefore(year, 5, 10),
  },
  {
    id: "maestro",
    nameEs: "Día del Maestro",
    nameEn: "Teacher's Day",
    type: "common",
    image: "/hero/maestro.svg",
    headlineEs: "Gracias, maestra",
    subheadlineEs:
      "Detalles pequeños con mensajes grandes. Envoltura lista para el salón.",
    whatsappMessage:
      "¡Hola! Quiero un detalle para el Día del Maestro. ¿Tienen opciones listas?",
    window: (year) => windowBefore(year, 5, 15),
  },
  {
    id: "padre",
    nameEs: "Día del Padre",
    nameEn: "Father's Day",
    type: "common",
    image: "/hero/padre.svg",
    headlineEs: "Un regalo para papá",
    subheadlineEs:
      "Papelería clásica, envolturas elegantes y tarjetas con estilo.",
    whatsappMessage:
      "¡Hola! Estoy buscando un regalo para papá. ¿Me recomiendan algo?",
    window: (year) => {
      const d = thirdSundayOfJune(year)
      return windowBefore(year, d.getMonth() + 1, d.getDate())
    },
  },
  {
    id: "abuelos",
    nameEs: "Día de los Abuelos",
    nameEn: "Grandparents' Day",
    type: "optional",
    image: "/hero/abuelos.svg",
    headlineEs: "Para los abuelos consentidores",
    subheadlineEs: "Detalles que se guardan para siempre.",
    whatsappMessage:
      "¡Hola! Quiero un regalo bonito para mis abuelos. ¿Me ayudan?",
    window: (year) => windowBefore(year, 8, 28),
  },
  {
    id: "muertos",
    nameEs: "Día de Muertos",
    nameEn: "Day of the Dead",
    type: "cultural",
    image: "/hero/muertos.svg",
    headlineEs: "Papel picado, cempasúchil y memoria",
    subheadlineEs:
      "Detalles para tu ofrenda y tarjetas para quienes ya no están.",
    whatsappMessage:
      "¡Hola! Me interesan detalles para mi ofrenda de Día de Muertos.",
    window: (year) => windowRange(year, 11, 1, 11, 2),
  },
  {
    id: "nochebuena",
    nameEs: "Nochebuena",
    nameEn: "Christmas Eve",
    type: "major",
    image: "/hero/nochebuena.svg",
    headlineEs: "Envuelve la Nochebuena",
    subheadlineEs:
      "Papel, moños y tarjetas para la cena que nadie va a olvidar.",
    whatsappMessage:
      "¡Hola! Quiero envolver varios regalos para Nochebuena. ¿Me ayudan?",
    window: (year) => windowBefore(year, 12, 24),
  },
  {
    id: "navidad",
    nameEs: "Navidad",
    nameEn: "Christmas",
    type: "major",
    image: "/hero/navidad.svg",
    headlineEs: "Feliz Navidad desde la papelería",
    subheadlineEs:
      "Regalos envueltos con paciencia, moños hechos a mano y detalles para todos.",
    whatsappMessage:
      "¡Hola! Necesito ayuda con regalos y envolturas de Navidad.",
    window: (year) => windowBefore(year, 12, 25),
  },
]

export const defaultHero = {
  image: "/hero/default.svg",
  headlineEs: "Papelería y envoltura con cariño",
  subheadlineEs:
    "Todo lo que necesitas para que un regalo se sienta como un abrazo.",
  whatsappMessage: "¡Hola! Me gustaría preguntar por sus servicios.",
}
