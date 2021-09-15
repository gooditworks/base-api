import {ApolloServer} from "apollo-server-micro"
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault
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
  process.env.APOLLO_SERVER_USER_VERSION = env.vercelCommit
  process.env.APOLLO_SERVER_PLATFORM = "vercel"
}

const introspection = env.apolloIntrospection === "true"

const server = new ApolloServer({
  schema,
  plugins,
  context,
  introspection
})

export default server
