import type { FastifyInstance } from 'fastify'
import { makeShortCutController } from '../../main/makeShortCutController'
import { ShortCutController } from '../controllers/shortCutController'

export async function shortCutRoutes(app: FastifyInstance) {
  const shortCutController: ShortCutController = makeShortCutController()

  app.post('/', async (request, reply) => {
    return shortCutController.create(request, reply)
  })
}
