import http from "k6/http"
import {check, sleep} from "k6"

const gqlRequest = (options) => () => {
  const body = JSON.stringify({
    operationName: options.operation,
    query: options.query
  })

  const params = {
    timeout: "10s",
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = http.post(options.url, body, params).json()
  check(response.data, options.check)

  sleep(1)
}

export default gqlRequest