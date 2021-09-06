import {VercelRequest} from "@vercel/node"

interface Context {
  authToken?: string
}

const context = ({req}: {req: VercelRequest}): Context => {
  const authHeader = req?.headers?.authorization || ""
  const authToken = /^Bearer\s(.+)/.exec(authHeader)?.[1]

  return {authToken}
}

export type {Context}
export default context
