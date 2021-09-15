import {HealthResolvers} from "../../types"

import empty from "./empty"
import slow from "./slow"
import realistic from "./realistic"
import fail from "./fail"

const healthResolvers: HealthResolvers = {
  empty,
  slow,
  realistic,
  fail
}

export default healthResolvers
