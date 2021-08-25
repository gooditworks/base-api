module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(test).ts", "**/tests/**.ts"],
  resolver: "<rootDir>/jest.resolver.cjs",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  }
}
