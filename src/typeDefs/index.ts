import {gql} from "apollo-server-micro"

const typeDefs = gql`
  type Query {
    greeting(name: String): String
  }
`

export default typeDefs
