import {ApolloServer} from "apollo-server-micro"
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginSchemaReporting
} from "apollo-server-core"

import env from "./env"
import schema from "./schema"
import context from "./context"
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
      initialDelayMaxMs: 5_000
    })
  )
}

const introspection = env.apolloIntrospection === "true"

const server = new ApolloServer({
  schema,
  plugins,
  context,
  introspection
})

export default server
