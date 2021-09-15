import gqlRequest from "../gql.js"

const options = {
  stages: [
    {duration: "10s", target: 250},
    {duration: "10s", target: 500},
    {duration: "10s", target: 750},
    {duration: "10s", target: 1000},
    {duration: "5s", target: 0}
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<200"],
  }
}

const test = gqlRequest({
  url: __ENV.npm_config_url,
  operation: "K6_Empty",
  query: "query K6_Empty { health { empty } }",
  check: {
    "health.empty: response valid": data => data.health.empty === "void"
  }
})

export default test
export {options}