import {ApolloError} from "apollo-server-errors"

class SuperuserError extends ApolloError {
  constructor() {
    super("Superuser token invalid", "SUPERUSER_TOKEN_INVALID")

    Object.defineProperty(this, "name", {value: "SuperuserError"})
  }
}

export default SuperuserError
