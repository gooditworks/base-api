/* eslint-disable class-methods-use-this */
import initMonitoring, {LogLevel, logger} from "@gooditworks/monitoring"
import {ApolloError} from "apollo-server-core"
import {
  BaseContext,
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestContextDidEncounterErrors
} from "apollo-server-plugin-base"

import ConsoleTransport from "@gooditworks/monitoring/logger/transport/console"
import LogdnaNodeTransport from "@gooditworks/monitoring/logger/transport/logdnaNode"
import ConsoleCapturer from "@gooditworks/monitoring/logger/capturer/console"
import SentryCapturer, {Sentry} from "@gooditworks/monitoring/logger/capturer/sentryNode"

import env from "./env"

const loggerTransports = [new ConsoleTransport()]
if (env.logdnaKey) {
  const logdnaTransport = new LogdnaNodeTransport(env.logdnaKey, {
    app: env.logdnaApp
  })

  loggerTransports.push(logdnaTransport)
}

const exceptionCapturers = [new ConsoleCapturer()]
if (env.sentryDsn) {
  const sentryCapturer = new SentryCapturer({
    dsn: env.sentryDsn,
    environment: env.sentryEnv
  })

  exceptionCapturers.push(sentryCapturer)
}

const logLevels: Record<string, LogLevel> = {
  trace: LogLevel.Trace,
  debug: LogLevel.Debug,
  info: LogLevel.Info,
  warn: LogLevel.Warn,
  error: LogLevel.Error,
  fatal: LogLevel.Fatal
}

initMonitoring({
  logger: {
    minimalLogLevel: logLevels[env.logLevel],
    loggerTransports,
    exceptionCapturers
  }
})

type GraphQLRequestErrorContext = GraphQLRequestContextDidEncounterErrors<BaseContext>

const logRequest = (startedAt: number) => async (context: GraphQLRequestContext) => {
  const finishedAt = Date.now()
  const elapsed = finishedAt - startedAt

  const {operationName, query} = context.request
  if (operationName === "IntrospectionQuery") {
    return
  }

  const variables = JSON.stringify(context.request.variables, null, 2)
  const response = JSON.stringify(context.response?.data, null, 2)

  // prettier-ignore
  const lines = [
    query?.trimEnd(),
    `Variables: ${variables}`,
    `Response: ${response}`
  ]

  logger.info(`Request "${operationName}" completed in ${elapsed}ms`)
  logger.debug(lines.join("\n"))
}

const logErrors = async (context: GraphQLRequestErrorContext) => {
  if (!context.operation) {
    return
  }

  context.errors?.forEach(error => {
    if (error instanceof ApolloError) {
      return
    }

    logger.captureException(error, {
      kind: context.operation?.operation,
      query: context.request.query,
      variables: context.request.variables
    })
  })

  await Sentry.flush(5000)
}

// https://blog.sentry.io/2020/07/22/handling-graphql-errors-using-sentry
// https://medium.com/@jmagnuss/graphql-apollo-server-plugins-in-typescript-26eb67bb02d4
const ApolloMonitoringPlugin: ApolloServerPlugin = {
  async requestDidStart() {
    const startedAt = Date.now()

    return {
      willSendResponse: logRequest(startedAt),
      didEncounterErrors: logErrors
    }
  }
}

export default ApolloMonitoringPlugin
