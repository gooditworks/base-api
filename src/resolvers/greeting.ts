import {ResolverHandler, QueryResolvers} from "../types"

type GreetingResolver = ResolverHandler<QueryResolvers["greeting"]>

const greeting: GreetingResolver = (_, {name}) => {
  const result = {
    ru: `Привет, ${name}`,
    en: `Hello, ${name}`
  }

  return result
}

export default greeting
