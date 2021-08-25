/* eslint-disable @typescript-eslint/no-explicit-any */

import http from "http"

import apolloRoute from "../api/index"

const server = new http.Server((request, response) => {
  apolloRoute(request as any, response as any)
})

server.listen(3000)
