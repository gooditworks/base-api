import sleep from "../../utils/sleep"
import {ResolverHandler, HealthResolvers} from "../../types"

type RealisticResolver = ResolverHandler<HealthResolvers["realistic"]>

const realistic: RealisticResolver = async () => {
  await sleep(Math.random() * 1000) // TODO make query to DB

  return "ok"
}

export default realistic
