/* eslint-disable class-methods-use-this */
import initMonitoring, {logger} from "@gooditworks/monitoring"
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
import SentryNodeCapturer from "@gooditworks/monitoring/logger/capturer/sentryNode"

import env from "./env"

const loggerTransports = [new ConsoleTransport()]
if (env.logdnaKey) {
  const logdnaTransport = new LogdnaNodeTransport(env.logdnaKey, {app: env.logdnaApp})

  loggerTransports.push(logdnaTransport)
}

const exceptionCapturers = [new ConsoleCapturer()]
if (env.sentryDsn) {
  const sentryCapturer = new SentryNodeCapturer({dsn: env.sentryDsn})

  exceptionCapturers.push(sentryCapturer)
}

initMonitoring({
  logger: {
    loggerTransports,
    exceptionCapturers
  }
})

type GraphQLRequestErrorContext = GraphQLRequestContextDidEncounterErrors<BaseContext>

// https://blog.sentry.io/2020/07/22/handling-graphql-errors-using-sentry
// https://medium.com/@jmagnuss/graphql-apollo-server-plugins-in-typescript-26eb67bb02d4
const ApolloMonitoringPlugin: ApolloServerPlugin = {
  async requestDidStart(requestContext: GraphQLRequestContext) {
    const {operationName, variables} = requestContext.request
    if (operationName !== "IntrospectionQuery") {
      logger.info(`${requestContext.request.query}`, {variables})
    }

    return {
      async didEncounterErrors(context: GraphQLRequestErrorContext) {
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
      }
    }
  }
}

export default ApolloMonitoringPlugin
