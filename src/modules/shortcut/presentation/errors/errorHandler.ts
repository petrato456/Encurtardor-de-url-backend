import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { AppError } from './error'

export function errorHandler(
  error: FastifyError | Error,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
    })
  }

  request.log.error(error)

  return reply.status(500).send({
    error: 'InternalServerError',
    message: 'Internal server error',
    statusCode: 500,
  })
}
