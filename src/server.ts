import {ApolloServer} from "apollo-server-micro"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"

import queryResolvers from "./resolvers"
import mutationResolvers from "./mutations"
import typeDefs from "./typeDefs"

import "./monitoring"

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true
})

export default server
