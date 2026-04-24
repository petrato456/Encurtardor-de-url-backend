import { ShortCurtEntity } from '../../domain/shortCutEntity'
import { ShortCutInterface } from '../../domain/shortCutInterface'

export class InMemoryShortCutRepository implements ShortCutInterface {
  private readonly shortCuts = new Map<string, ShortCurtEntity>()

  async create(shortCut: ShortCurtEntity): Promise<ShortCurtEntity> {
    this.shortCuts.set(shortCut.getCode(), shortCut)

    return shortCut
  }

  async findByCode(code: string): Promise<ShortCurtEntity | null> {
    return this.shortCuts.get(code) ?? null
  }

  async findByBaseUrl(baseUrl: string): Promise<ShortCurtEntity | null> {
    for (const shortCut of this.shortCuts.values()) {
      if (shortCut.getBaseUrl() === baseUrl) {
        return shortCut
      }
    }

    return null
  }

  async update(shortCut: ShortCurtEntity): Promise<ShortCurtEntity> {
    this.shortCuts.set(shortCut.getCode(), shortCut)

    return shortCut
  }

  async delete(code: string): Promise<void> {
    this.shortCuts.delete(code)
  }
}
