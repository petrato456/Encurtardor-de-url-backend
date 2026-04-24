import Fastify from 'fastify'
import cors from '@fastify/cors'

import { shortCutRoutes } from './modules/shortcut/presentation/routes/shortCut.routes'
import { errorHandler } from './modules/shortcut/presentation/errors/errorHandler'

export function buildApp() {
  const app = Fastify({
    logger: true,
  })

  app.register(cors, {
    origin: true,
  })

  app.setErrorHandler(errorHandler)

  app.register(shortCutRoutes, { prefix: '/shortcuts' })

  return app
}
