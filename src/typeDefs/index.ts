import {join} from "path"
import {compact} from "lodash"

import {loadTypedefsSync} from "@graphql-tools/load"
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader"

const typeDefs = loadTypedefsSync(join(__dirname, "index.graphql"), {
  loaders: [new GraphQLFileLoader()]
})

const documents = typeDefs.map(source => source.document)

export default compact(documents)
