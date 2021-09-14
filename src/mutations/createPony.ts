import prisma from "../prisma"
import {ResolverHandler, MutationResolvers} from "../types"

type CreatePonyMutation = ResolverHandler<MutationResolvers["createPony"]>

const createPony: CreatePonyMutation = async (_, {name, race}) => {
  const response = await prisma.pony.create({data: {name, race}})

  return response
}

export default createPony
