import {ApolloError} from "apollo-server-errors"

class NotFoundError extends ApolloError {
  constructor() {
    super("Enity not found", "404_NOT_FOUND")

    Object.defineProperty(this, "name", {value: "NotFoundError"})
  }
}

export default NotFoundError
