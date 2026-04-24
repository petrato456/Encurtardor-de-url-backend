import { ShortCurtEntity } from './shortCutEntity'

export interface ShortCutInterface {
  create: (shortCut: ShortCurtEntity) => Promise<ShortCurtEntity>
  findByCode: (code: string) => Promise<ShortCurtEntity | null>
  findByBaseUrl: (baseUrl: string) => Promise<ShortCurtEntity | null>
  update: (shortCut: ShortCurtEntity) => Promise<ShortCurtEntity>
  delete: (code: string) => Promise<void>
}
