import Fastify from 'fastify'
import cors from '@fastify/cors'

import { shortCutRoutes } from './modules/shortcut/presentation/routes/shortCut.routes'

export function buildApp() {
  const app = Fastify({
    logger: true,
  })

  app.register(cors, {
    origin: true,
  })

  app.register(shortCutRoutes, { prefix: '/shortcuts' })

  return app
}
