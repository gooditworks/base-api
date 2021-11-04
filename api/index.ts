import {VercelApiHandler} from "@vercel/node"
import {Sentry} from "@gooditworks/monitoring/logger/capturer/sentryNode"

import server from "../src/server"
import env from "../src/env"

const startPromise = server.start()

const handler: VercelApiHandler = async (request, response) => {
  await startPromise
  const apolloHanlder = server.createHandler({path: "/"})

  const requestOrigin = request.headers.origin || ""
  if (env.corsOrigins.includes(requestOrigin)) {
    response.setHeader("Access-Control-Allow-Origin", requestOrigin)
    response.setHeader("Access-Control-Allow-Headers", "*")
    response.setHeader("Access-Control-Allow-Credentials", "true")
  }

  if (request.method === "OPTIONS") {
    return response.status(200).end()
  }

  await apolloHanlder(request, response)
  await Sentry.flush(5000)

  return undefined
}

const config = {
  api: {
    bodyParser: false
  }
}

export default handler
export {config}
