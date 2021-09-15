/* eslint-disable import/first */

import {callResolver} from "../../utils/testing"

const prismaCountSpy = jest.fn(() => 42)

jest.mock("../../prisma", () => ({
  pony: {count: prismaCountSpy}
}))

afterEach(jest.clearAllMocks)

import realistic from "./realistic"

test("health.realistic resolver works correctly", async () => {
  const result = await callResolver(realistic)

  expect(result).toEqual("pony count: 42")
})
