import {QueryResolvers} from "../types"

type GreetingResolver = QueryResolvers["greeting"]

const greeting: GreetingResolver = (_, {name}) => {
  return `Hello, ${name}`
}

export default greeting
