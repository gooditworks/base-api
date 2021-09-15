import {callResolver} from "../../utils/testing"

import slow from "./slow"

test("health.slow resolver slows response", async () => {
  const start = Date.now()
  const result = await callResolver(slow, {duration: 1000, percent: 0})
  const end = Date.now()

  const delay = end - start
  expect(delay).toBeCloseTo(1000, -2)
  expect(result).toEqual("lucky")
})
