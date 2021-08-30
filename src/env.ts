import dotenv from "dotenv"

dotenv.config()

const env = {
  isProduction: process.env.IS_PRODUCTION,
  sentryDsn: process.env.SENTRY_DSN,
  logdnaKey: process.env.LOGDNA_KEY,
  logdnaApp: "base"
}

export default env
