import {VercelApiHandler} from "@vercel/node"

import server from "../src/server"

const startPromise = server.start()

const handler: VercelApiHandler = async (request, response) => {
  await startPromise
  const apolloHanlder = server.createHandler({path: "/"})

  return apolloHanlder(request, response)
}

const config = {
  api: {
    bodyParser: false
  }
}

export default handler
export {config}
