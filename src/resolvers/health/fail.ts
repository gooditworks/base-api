import {ResolverHandler, HealthResolvers} from "../../types"
import {ExpectedError} from "../../errors"

type FailResolver = ResolverHandler<HealthResolvers["fail"]>

const fail: FailResolver = (_, {message}) => {
  throw new ExpectedError(message || undefined)
}

export default fail
