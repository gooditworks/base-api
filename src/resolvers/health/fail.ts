import {ResolverHandler, HealthResolvers} from "../../types"

type FailResolver = ResolverHandler<HealthResolvers["fail"]>

const fail: FailResolver = (_, {message}) => {
  throw new Error(message || "health.fail resolver called")
}

export default fail
