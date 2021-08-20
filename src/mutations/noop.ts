/* eslint-disable no-console */

import {ResolverHandler, MutationResolvers} from "../types"

type NoopMutation = ResolverHandler<MutationResolvers["noop"]>

const noop: NoopMutation = () => {
  console.log("noop")

  return 42
}

export default noop
