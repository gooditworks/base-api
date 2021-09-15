import gqlRequest from "../gql.js"

const options = {
  vus: 50,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate>0.08"],
    http_req_duration: ["p(95)>9500"],
  }
}

const test = gqlRequest({
  url: __ENV.npm_config_url,
  operation: "K6_Slow",
  query: "query K6_Slow { health { slow(duration: 1000, percent: 10) } }",
  check: {
    "health.slow: response valid": data => data.health.slow === "lucky"
  }
})

export default test
export {options}