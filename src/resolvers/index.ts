import {QueryResolvers} from "../types"

import ponies from "./ponies"
import pony from "./pony"

const resolvers: QueryResolvers = {
  ponies,
  pony
}

export default resolvers
