/* eslint-disable @typescript-eslint/no-explicit-any, no-console */

import http from "http"

import apolloRoute from "../api/index"

const HOST = "localhost"
const PORT = 3000

const server = new http.Server((request, response) => {
  apolloRoute(request as any, response as any)
})

server.listen(PORT, HOST, () => {
  console.log(`Apollo Server started at: http://${HOST}:${PORT}`)
})
