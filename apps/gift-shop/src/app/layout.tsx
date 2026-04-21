import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { GrainOverlay } from "@/components/grain-overlay"
import "./globals.css"

const repoName = process.env.NEXT_PUBLIC_REPO_NAME
const siteUrl = repoName
  ? `https://kjgarza.github.io/${repoName}`
  : "https://giftshop.example"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gift Shop",
    template: "%s | Gift Shop",
  },
  description:
    "Gift Shop es una papelería de colores dulces llena de libretas, envolturas, tarjetas, calcomanías y tesoritos de escritorio.",
  keywords: [
    "gift shop",
    "papelería",
    "libretas",
    "papel para envolver",
    "calcomanías",
    "tarjetas",
    "regalos",
  ],
  openGraph: {
    title: "Gift Shop",
    description: "Donde los sueños de papel se hacen realidad.",
    url: siteUrl,
    siteName: "Gift Shop",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Shop",
    description: "Donde los sueños de papel se hacen realidad.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Baloo+2:wght@400;500;700;800&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={
          {
            "--font-display": "'Bree Serif'",
            "--font-body": "'Baloo 2'",
            "--font-script": "'Caveat'",
          } as React.CSSProperties
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="candy-bazaar"
          enableSystem={false}
          disableTransitionOnChange
          themes={["candy-bazaar", "sunny-mercado", "midnight-bonbons", "after-hours-neon"]}
        >
          <GrainOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
