import {callResolver} from "../utils/testing"
import greeting from "./greeting"

test("greeting resolver works correctly", () => {
  const result = callResolver(greeting, {name: "luna"})

  expect(result).toEqual({
    ru: "Привет, luna",
    en: "Hello, luna"
  })
})
