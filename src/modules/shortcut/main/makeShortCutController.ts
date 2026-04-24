import { CreateShortCut } from '../application/createShortCut'
import { ShortCutRepository } from '../infrastructure/repositories/shortCutRepository'
import { ShortCutController } from '../presentation/controllers/shortCutController'

export function makeShortCutController() {
  const shortCutRepository = new ShortCutRepository()
  const createShortCut = new CreateShortCut(shortCutRepository)

  return new ShortCutController(createShortCut)
}
