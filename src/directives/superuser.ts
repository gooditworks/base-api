import {mapSchema, getDirective, MapperKind} from "@graphql-tools/utils"
import {GraphQLSchema, defaultFieldResolver, GraphQLFieldResolver} from "graphql"
import {Context} from "src/context"

import {SuperuserError} from "../errors"

type Resolve = GraphQLFieldResolver<unknown, Context>

// prettier-ignore
const superuserDirective = (schema: GraphQLSchema, token: string) => mapSchema(schema, {
  [MapperKind.OBJECT_FIELD]: field => {
    const directive = getDirective(schema, field, "superuser")?.[0]
    if (!directive) {
      return field
    }

    const originalResolve = field.resolve || defaultFieldResolver
    const newResolve: Resolve = (source, args, context, info) => {
      if (context.authToken !== token) {
        throw new SuperuserError()
      }

      return originalResolve(source, args, context, info)
    }

    return {...field, resolve: newResolve}
  }
})

export default superuserDirective
