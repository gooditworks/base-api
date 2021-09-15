import gqlRequest from "../gql.js"

const options = {
  vus: 50,
  duration: "1m",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<1250"],
  }
}

const test = gqlRequest({
  url: __ENV.npm_config_url,
  operation: "K6_Realistic",
  query: "query K6_Realistic { health { realistic } }",
  check: {
    "health.realistic: response valid": data => data.health.realistic === "ok"
  }
})

export default test
export {options}