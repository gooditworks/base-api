import mutations from "../mutations"
import health from "./health"
import ponies from "./ponies"
import pony from "./pony"

const resolvers = {
  Health: health,
  Mutation: mutations,
  Query: {
    health: () => ({}),
    ponies,
    pony
  }
}

export default resolvers
