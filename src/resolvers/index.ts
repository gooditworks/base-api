import {QueryResolvers} from "../types"

import greeting from "./greeting"
import ponies from "./ponies"
import pony from "./pony"

const resolvers: QueryResolvers = {
  greeting,
  ponies,
  pony
}

export default resolvers
