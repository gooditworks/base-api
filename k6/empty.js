import http from "k6/http"
import {check, sleep} from "k6"

const VERCEL_URL = __ENV.VERCEL_URL

const options = {
  stages: [
    {duration: "20s", target: 25},
    {duration: "20s", target: 50},
    {duration: "20s", target: 75},
    {duration: "20s", target: 100},
    {duration: "20s", target: 0}
  ]
}

const empty = () => {
  const body = JSON.stringify({
    query: "query K6_Empty { health { empty } }"
  })

  const headers = {
    "Content-Type": "application/json"
  }

  const response = http.post(VERCEL_URL, body, {headers}).json()
  check(response, {
    "response valid": r => r.data.health.empty === "void"
  })

  sleep(1)
}

export {options}
export default empty