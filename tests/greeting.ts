import {gql} from "apollo-server-core"

import server from "../src/server"

jest.useFakeTimers()

const GREETING_QUERY = gql`
  query ($name: String!) {
    greeting(name: $name) {
      ru
      en
    }
  }
`

test("greeting query works correctly", async () => {
  const result = await server.executeOperation({
    query: GREETING_QUERY,
    variables: {name: "tester"}
  })

  expect(result.errors).toBeUndefined()
  expect(result.data?.greeting).toEqual({
    ru: "Привет, tester",
    en: "Hello, tester"
  })
})
