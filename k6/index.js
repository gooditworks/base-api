import http from "k6/http"
import {check, sleep} from "k6"

const URL = `https://${__ENV.npm_config_url}`

const options = {
  stages: [
    {duration: "10s", target: 25},
    {duration: "10s", target: 50},
    {duration: "10s", target: 75},
    {duration: "10s", target: 100},
    {duration: "5s", target: 0}
  ]
}

const empty = () => {
  const body = JSON.stringify({
    query: "query K6_Empty { health { empty } }"
  })

  const headers = {
    "Content-Type": "application/json"
  }

  const response = http.post(URL, body, {headers}).json()
  check(response, {
    "response valid": r => r.data.health.empty === "void"
  })

  sleep(1)
}

export {options}
export default empty