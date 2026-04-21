import { about } from "@/content/about"

export const metadata = {
  title: "Nosotras",
  description: "Acerca de Gift Shop",
}

export default function AboutPage() {
  return (
    <article className="prose prose-lg mx-auto max-w-3xl px-4 py-12">
      <h1>Nosotras</h1>

      <h2>Motivaciones</h2>
      <p>{about.motivations}</p>

      <h2>Principios de diseño</h2>
      <ul>
        {about.principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ul>

      <h2>Cómo fue construido</h2>
      <p>{about.howBuilt}</p>
    </article>
  )
}
