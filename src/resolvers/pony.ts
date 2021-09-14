import prisma from "../prisma"
import {NotFoundError} from "../errors"
import {ResolverHandler, QueryResolvers} from "../types"

type PonyResolver = ResolverHandler<QueryResolvers["pony"]>

const pony: PonyResolver = async (_, {id}) => {
  const response = await prisma.pony.findFirst({where: {id}})
  if (!response) {
    throw new NotFoundError()
  }

  return response
}

export default pony
