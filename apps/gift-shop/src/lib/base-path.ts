const repoName = process.env.NEXT_PUBLIC_REPO_NAME
const basePath = repoName ? `/${repoName}` : ""

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return `${basePath}/${path}`
  return `${basePath}${path}`
}
