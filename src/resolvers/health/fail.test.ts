import {callResolver} from "../../utils/testing"

import fail from "./fail"

test("health.fail resolver works correctly", () => {
  const result = () => callResolver(fail, {})

  expect(result).toThrow(Error)
})
