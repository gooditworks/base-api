import {join} from "path"
import {loadSchemaSync} from "@graphql-tools/load"
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader"
import {makeExecutableSchema} from "@graphql-tools/schema"

import env from "../env"
import queryResolvers from "../resolvers"
import mutationResolvers from "../mutations"
import {superuser} from "../directives"

const typeDefs = loadSchemaSync(join(__dirname, "index.graphql"), {
  loaders: [new GraphQLFileLoader()]
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers
  }
})

const withSuperuser = superuser(schema, env.superuserToken)

export default withSuperuser
