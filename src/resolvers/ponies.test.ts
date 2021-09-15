/* eslint-disable import/first */

import {callResolver} from "../utils/testing"

const testPonies = [{name: "Test pone #1"}, {name: "Test pone #2"}]

const prismaFindSpy = jest.fn(() => testPonies)

jest.mock("../prisma", () => ({
  pony: {findMany: prismaFindSpy}
}))

afterEach(jest.clearAllMocks)

import ponies from "./ponies"

test("ponies resolver returns ponies correctly", async () => {
  const result = await callResolver(ponies)

  expect(result).toEqual(testPonies)
  expect(prismaFindSpy).toBeCalled()
})
