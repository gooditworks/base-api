import dotenv from "dotenv"

dotenv.config()

const env = {
  logLevel: process.env.LOG_LEVEL || "trace",
  sentryDsn: process.env.SENTRY_DSN,
  logdnaKey: process.env.LOGDNA_KEY,
  logdnaApp: "base"
}

export default env
