import {VercelApiHandler} from "@vercel/node"
import {ApolloServer} from "apollo-server-micro"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"

import queryResolvers from "../src/resolvers"
import mutationResolvers from "../src/mutations"
import typeDefs from "../src/typeDefs"

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

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
