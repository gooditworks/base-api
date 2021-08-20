import {gql} from "apollo-server-micro"

const typeDefs = gql`
  type Query {
    greeting(name: String): String
  }
  type Mutation {
    noop: Int
  }
`

export default typeDefs
