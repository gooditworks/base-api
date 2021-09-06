import sleep from "../../utils/sleep"
import {ResolverHandler, HealthResolvers} from "../../types"

type SlowResolver = ResolverHandler<HealthResolvers["slow"]>

const slow: SlowResolver = async (_, {duration, percent}) => {
  const random = Math.random()
  if (percent / 100 >= random) {
    await sleep(duration)

    return "slow (with delay)"
  }

  return "fast (without delay)"
}

export default slow
