import {MutationResolvers} from "../types"

import noop from "./noop"
import createPony from "./createPony"

const mutations: MutationResolvers = {
  noop,
  createPony
}

export default mutations
