import {gql} from "apollo-server-core"

import server from "../src/server"

const GREETING_QUERY = gql`
  query ($name: String!) {
    greeting(name: $name)
  }
`

test("greeting query works correctly", async () => {
  const result = await server.executeOperation({
    query: GREETING_QUERY,
    variables: {name: "tester"}
  })

  expect(result.errors).toBeUndefined()
  expect(result.data?.greeting).toBe("Hello, tester")
})
