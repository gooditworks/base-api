/* eslint-disable import/first */

import {NotFoundError} from "../errors"
import {callResolver} from "../utils/testing"

const testPony = {name: "Test pone"}

const prismaFindSpy = jest.fn(args => {
  if (args.where.id === 0) {
    return null
  }

  return testPony
})

jest.mock("../prisma", () => ({
  pony: {findFirst: prismaFindSpy}
}))

afterEach(jest.clearAllMocks)

import pony from "./pony"

test("pony resolver return pony correctly", async () => {
  const id = 1
  const result = await callResolver(pony, {id})

  expect(result).toEqual(testPony)
  expect(prismaFindSpy).toBeCalledWith({where: {id}})
})

test("pony resolver throws NotFound error", async () => {
  const id = 0
  const operation = async () => {
    await callResolver(pony, {id})
  }

  await expect(operation).rejects.toThrow(NotFoundError)
  expect(prismaFindSpy).toBeCalledWith({where: {id}})
})
