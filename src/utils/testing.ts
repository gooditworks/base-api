import {GraphQLResolveInfo} from "graphql"
import {ResolverHandler} from "src/types"

type ResolverArgs = Record<string, unknown>

const callResolver = <T>(resolver: ResolverHandler<T>, args?: ResolverArgs) => {
  return resolver(null, args, null, undefined as unknown as GraphQLResolveInfo)
}

/* eslint-disable-next-line import/prefer-default-export */
export {callResolver}
