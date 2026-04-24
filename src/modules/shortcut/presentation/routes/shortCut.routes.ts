import type { FastifyInstance } from 'fastify'
import { CreateShortCut } from '../../application/createShortCut'
import { InMemoryShortCutRepository } from '../../infrastructure/repositories/inMemoryShortCutRepository'
import { ShortCutController } from '../controllers/shortCutController'

export async function shortCutRoutes(app: FastifyInstance) {
  const shortCutRepository = new InMemoryShortCutRepository()
  const createShortCut = new CreateShortCut(shortCutRepository)
  const shortCutController = new ShortCutController(createShortCut)

  app.post('/', async (request, reply) => {
    return shortCutController.create(request, reply)
  })
}
