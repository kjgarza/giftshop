import { appendFile, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { holidays } from "@/content/holidays"
import {
  buildInstagramCampaignManifest,
  formatDate,
  resolveExecutionDate,
  selectHolidayForDate,
} from "@/lib/instagram-campaign"

type CliOptions = {
  date?: string
  holidayId?: string
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {}

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    const nextValue = argv[index + 1]

    if (arg === "--date") {
      if (!nextValue) {
        throw new Error("Missing value for --date.")
      }

      options.date = nextValue
      index += 1
      continue
    }

    if (arg === "--holiday-id") {
      if (!nextValue) {
        throw new Error("Missing value for --holiday-id.")
      }

      options.holidayId = nextValue
      index += 1
      continue
    }

    throw new Error(`Unknown argument "${arg}".`)
  }

  return options
}

async function appendFileLine(filePath: string | undefined, line: string) {
  if (!filePath) {
    return
  }

  await appendFile(filePath, `${line}\n`, "utf8")
}

async function setGithubOutput(name: string, value: string) {
  const outputFile = process.env.GITHUB_OUTPUT
  await appendFileLine(outputFile, `${name}=${value}`)
}

async function appendSummary(lines: string[]) {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY

  if (!summaryFile) {
    return
  }

  for (const line of lines) {
    await appendFileLine(summaryFile, line)
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const executionDate = resolveExecutionDate(options.date)
  const scriptFilePath = fileURLToPath(import.meta.url)
  const scriptDir = path.dirname(scriptFilePath)
  const appRoot = path.resolve(scriptDir, "..")
  const repoRoot = path.resolve(appRoot, "..", "..")
  const outputDir = path.join(repoRoot, "generated", "instagram")

  let selectedHoliday = null

  if (options.holidayId) {
    selectedHoliday =
      holidays.find((holiday) => holiday.id === options.holidayId) ?? null

    if (!selectedHoliday) {
      throw new Error(`Holiday "${options.holidayId}" was not found.`)
    }
  } else {
    selectedHoliday = selectHolidayForDate(executionDate, holidays)
  }

  if (!selectedHoliday) {
    console.log(`No active holiday found for ${formatDate(executionDate)}.`)
    await setGithubOutput("campaign_created", "false")
    await appendSummary([
      "## Instagram Campaign Generation",
      "",
      `- Execution date: ${formatDate(executionDate)}`,
      "- No holiday window matched. No campaign manifest was created.",
    ])
    return
  }

  const manifest = buildInstagramCampaignManifest(
    selectedHoliday,
    executionDate,
    appRoot,
  )

  await mkdir(outputDir, { recursive: true })

  const manifestPath = path.join(
    outputDir,
    `${manifest.executionDate}-${manifest.holiday.id}.json`,
  )

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8")

  const manifestRelativePath = path.relative(repoRoot, manifestPath)

  console.log(
    `Created Instagram campaign manifest for "${manifest.holiday.id}" at ${manifestRelativePath}.`,
  )

  await setGithubOutput("campaign_created", "true")
  await setGithubOutput("manifest_path", manifestRelativePath)
  await appendSummary([
    "## Instagram Campaign Generation",
    "",
    `- Execution date: ${manifest.executionDate}`,
    `- Selected holiday: ${manifest.holiday.nameEs} (\`${manifest.holiday.id}\`)`,
    `- Campaign window: ${manifest.window.start} to ${manifest.window.end}`,
    `- Manifest: \`${manifestRelativePath}\``,
  ])
}

await main()
