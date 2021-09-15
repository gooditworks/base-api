import {callResolver} from "../../utils/testing"

import empty from "./empty"

test("health.empty resolver works correctly", () => {
  const result = callResolver(empty)

  expect(result).toEqual("void")
})
