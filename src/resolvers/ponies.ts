import prisma from "../prisma"
import {ResolverHandler, QueryResolvers} from "../types"

type PoniesResolver = ResolverHandler<QueryResolvers["ponies"]>

const ponies: PoniesResolver = async () => {
  const response = await prisma.pony.findMany()

  return response
}

export default ponies
