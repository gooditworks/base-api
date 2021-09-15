import prisma from "../../prisma"
import {ResolverHandler, HealthResolvers} from "../../types"

type RealisticResolver = ResolverHandler<HealthResolvers["realistic"]>

const realistic: RealisticResolver = async () => {
  const count = await prisma.pony.count()

  return `pony count: ${count}`
}

export default realistic
