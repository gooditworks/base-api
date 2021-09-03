import {ApolloServer} from "apollo-server-micro"
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginSchemaReporting
} from "apollo-server-core"

import env from "./env"
import queryResolvers from "./resolvers"
import mutationResolvers from "./mutations"
import typeDefs from "./typeDefs"

import ApolloMonitoringPlugin from "./monitoring"

const plugins = [ApolloMonitoringPlugin]
if (env.apolloExplorer === "true") {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground())
} else {
  plugins.push(ApolloServerPluginLandingPageProductionDefault())
}

if (env.vercel && env.apolloKey && env.apolloGraphId) {
  process.env.APOLLO_GRAPH_VARIANT = env.vercelBranch

  process.env.APOLLO_SERVER_PLATFORM = "vercel"
  process.env.APOLLO_SERVER_USER_VERSION = env.vercelCommit

  plugins.push(
    ApolloServerPluginSchemaReporting({
      initialDelayMaxMs: 30_000
    })
  )
}

const introspection = env.apolloIntrospection === "true"

const server = new ApolloServer({
  plugins,
  typeDefs,
  introspection,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers
  }
})

export default server
