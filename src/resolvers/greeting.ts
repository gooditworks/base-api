import {ResolverHandler, QueryResolvers} from "../types"

type GreetingResolver = ResolverHandler<QueryResolvers["greeting"]>

const greeting: GreetingResolver = (_, {name}) => {
  return `Hello, ${name}`
}

export default greeting
