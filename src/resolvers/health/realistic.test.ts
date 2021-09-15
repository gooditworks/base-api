import {callResolver} from "../../utils/testing"

import realistic from "./realistic"

test("health.realistic resolver works correctly", async () => {
  const result = await callResolver(realistic)

  expect(result).toEqual("ok")
})
