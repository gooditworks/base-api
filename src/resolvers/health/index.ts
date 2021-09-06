import {HealthResolvers} from "../../types"

import empty from "./empty"
import slow from "./slow"
import fail from "./fail"

const healthResolvers: HealthResolvers = {empty, slow, fail}

export default healthResolvers
