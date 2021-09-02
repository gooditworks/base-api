import {VercelApiHandler} from "@vercel/node"

import server from "../src/server"

const startPromise = server.start()

const handler: VercelApiHandler = async (request, response) => {
  await startPromise
  const apolloHanlder = server.createHandler({path: "/"})

  response.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com")
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST")
  response.setHeader("Access-Control-Allow-Headers", "Content-Type")
  response.setHeader("Access-Control-Allow-Credentials", "true")

  if (request.method === "OPTIONS") {
    return response.status(200).end()
  }

  return apolloHanlder(request, response)
}

const config = {
  api: {
    bodyParser: false
  }
}

export default handler
export {config}
