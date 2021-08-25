/* eslint-disable import/first */

const consoleSpy = jest.spyOn(console, "log")

import {callResolver} from "../utils/testing"
import noop from "./noop"

test("noop mutation works correctly", () => {
  const result = callResolver(noop)

  expect(result).toBe(42)
  expect(consoleSpy).toBeCalledWith("noop")
})
