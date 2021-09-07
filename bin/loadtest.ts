import {loadTest, LoadTestOptions, LoadTestResult} from "loadtest"

const deployUrl = process.env.DEPLOY_URL

const options: LoadTestOptions = {
  url: `${deployUrl}`,
  method: "POST",
  contentType: "application/json",
  body: JSON.stringify({
    query: "query { health {empty} }"
  }),
  concurrency: 10,
  maxRequests: 10000
}

loadTest(options, (error: Error, result: LoadTestResult) => {
  console.log({error, result})
})
