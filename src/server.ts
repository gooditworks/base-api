import {ApolloServer} from "apollo-server-micro"
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault
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
