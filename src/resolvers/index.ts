import health from "./health"
import mutations from "./mutations"
import greeting from "./greeting"

const resolvers = {
  Health: health,
  Mutation: mutations,
  Query: {
    greeting,
    health: () => ({})
  }
}

export default resolvers
