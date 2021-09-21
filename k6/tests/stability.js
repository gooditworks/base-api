import gqlRequest from "../gql.js"

const options = {
  scenarios: {
    stability: {
      executor: "constant-arrival-rate",
      duration: "10s",
      gracefulStop: "1s",
      preAllocatedVUs: 1,
      maxVUs: 10,
      rate: 5
    }
  },
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<300"],
  },
}

const test = gqlRequest({
  url: __ENV.npm_config_url || __ENV.VERCEL_URL,
  operation: "K6_Realistic",
  query: "query K6_Realistic { health { realistic } }",
  check: {
    "response valid": data => data.health.realistic.startsWith("pony count")
  }
})

export default test
export {options}
