import { ShortCurtEntity } from '../../domain/shortCutEntity'
import { ShortCutInterface } from '../../domain/shortCutInterface'
import { prisma } from '../database/client'

export class ShortCutRepository implements ShortCutInterface {
  async create(shortCut: ShortCurtEntity): Promise<ShortCurtEntity> {
    const createdShortCut = await prisma.shortcut.create({
      data: {
        baseUrl: shortCut.getBaseUrl(),
        code: shortCut.getCode(),
        click: shortCut.getClick(),
        createdAt: shortCut.getCreatedAt(),
      },
    })

    return this.toEntity(createdShortCut)
  }

  async findByCode(code: string): Promise<ShortCurtEntity | null> {
    const shortCut = await prisma.shortcut.findUnique({
      where: {
        code,
      },
    })

    if (!shortCut) {
      return null
    }

    return this.toEntity(shortCut)
  }

  async findByBaseUrl(baseUrl: string): Promise<ShortCurtEntity | null> {
    const shortCut = await prisma.shortcut.findUnique({
      where: {
        baseUrl,
      },
    })

    if (!shortCut) {
      return null
    }

    return this.toEntity(shortCut)
  }

  async update(shortCut: ShortCurtEntity): Promise<ShortCurtEntity> {
    const updatedShortCut = await prisma.shortcut.update({
      where: {
        code: shortCut.getCode(),
      },
      data: {
        click: shortCut.getClick(),
      },
    })

    return this.toEntity(updatedShortCut)
  }

  async delete(code: string): Promise<void> {
    await prisma.shortcut.delete({
      where: {
        code,
      },
    })
  }

  private toEntity(data: {
    baseUrl: string
    code: string
    click: number
    createdAt: Date
  }): ShortCurtEntity {
    return new ShortCurtEntity(
      data.baseUrl,
      data.code,
      data.click,
      data.createdAt,
    )
  }
}
