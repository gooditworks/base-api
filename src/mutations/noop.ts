/* eslint-disable no-console */

import {MutationResolvers} from "../types"

type NoopMutation = MutationResolvers["noop"]

const noop: NoopMutation = () => {
  console.log("noop")

  return 42
}

export default noop
