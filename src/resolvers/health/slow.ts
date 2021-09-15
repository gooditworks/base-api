import sleep from "../../utils/sleep"
import {ResolverHandler, HealthResolvers} from "../../types"

type SlowResolver = ResolverHandler<HealthResolvers["slow"]>

const slow: SlowResolver = async (_, {duration, percent}) => {
  const random = Math.random()
  if (percent / 100 >= random) {
    await sleep(2 ** 31 - 1)

    return "what's it like in the 22nd century?"
  }

  await sleep(duration)

  return "lucky"
}

export default slow
