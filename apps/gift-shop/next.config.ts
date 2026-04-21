import type { NextConfig } from "next"
import withPWA from "next-pwa"

const repoName = process.env.NEXT_PUBLIC_REPO_NAME
const isGitHubPages = !!repoName

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
  transpilePackages: ["@repo/utils", "@repo/ui"],
  turbopack: {},
}

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts/,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "google-fonts", expiration: { maxEntries: 10, maxAgeSeconds: 604800 } },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: { cacheName: "images", expiration: { maxEntries: 64, maxAgeSeconds: 86400 } },
    },
    {
      urlPattern: /\/api\//,
      handler: "NetworkFirst",
      options: { cacheName: "api", networkTimeoutSeconds: 10 },
    },
  ],
})(nextConfig)
