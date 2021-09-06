import {ApolloError} from "apollo-server-errors"

class ExpectedError extends ApolloError {
  constructor(message?: string) {
    super(message || "Health.fail resolver called", "FAIL_RESOLVER")

    Object.defineProperty(this, "name", {value: "ExpectedError"})
  }
}

export default ExpectedError
