import {ApolloServer} from "apollo-server-micro"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"

import queryResolvers from "./resolvers"
import mutationResolvers from "./mutations"
import typeDefs from "./typeDefs"

import ApolloMonitoringPlugin from "./monitoring"

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers
  },
  plugins: [ApolloMonitoringPlugin, ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true
})

export default server
