import dotenv from "dotenv"

dotenv.config()

const requiredEnv = (name: string) => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Required ${name} env var not found`)
  }

  return value
}

const env = {
  logLevel: process.env.LOG_LEVEL || "trace",
  sentryDsn: process.env.SENTRY_DSN,
  logdnaKey: process.env.LOGDNA_KEY,
  logdnaApp: "base",
  apolloKey: process.env.APOLLO_KEY,
  apolloGraphId: process.env.APOLLO_GRAPH_ID,
  apolloExplorer: process.env.APOLLO_EXPLORER,
  apolloIntrospection: process.env.APOLLO_INTROSPECTION,
  vercel: Boolean(process.env.VERCEL),
  vercelBranch: process.env.VERCEL_GIT_COMMIT_REF,
  vercelCommit: process.env.VERCEL_GIT_COMMIT_SHA,
  superuserToken: requiredEnv("SUPERUSER_TOKEN")
}

export default env
