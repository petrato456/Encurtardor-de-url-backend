import { ShortCurtEntity } from '../domain/shortCutEntity'
import { ShortCutInterface } from '../domain/shortCutInterface'
import { AppError } from '../presentation/errors/error'
import { generateShortCutCode } from '../utils/generateShortCutCode'

export class CreateShortCut {
  constructor(private shortCutRepository: ShortCutInterface) {}

  async execute(baseUrl: string) {
    const existsShortCut = await this.shortCutRepository.findByBaseUrl(baseUrl)

    if (existsShortCut) {
      const response = `www.shortcut.com/${existsShortCut.getCode()}`
      const updatedShortCut = existsShortCut.withClicks(
        existsShortCut.getClick() + 1,
      )

      await this.shortCutRepository.update(updatedShortCut)
      return { shortCut: response }
    }

    for (let attempt = 0; attempt < 5; attempt++) {
      const code = generateShortCutCode(6)
      const codeAlreadyExists = await this.shortCutRepository.findByCode(code)

      if (codeAlreadyExists) {
        continue
      }

      const shortCut = new ShortCurtEntity(baseUrl, code, 1, new Date())
      shortCut.validate()
      const create = await this.shortCutRepository.create(shortCut)

      const response = `www.shortcut.com/${create.getCode()}`
      return {
        shortCut: response,
      }
    }

    throw new AppError('Could not generate a unique shortcut code', 409)
  }
}
