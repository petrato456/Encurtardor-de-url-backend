import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateShortCut } from '../../application/createShortCut'

export class ShortCutController {
  constructor(private createShortCut: CreateShortCut) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const { baseUrl } = req.body as { baseUrl: string }
    const shortCut = await this.createShortCut.execute(baseUrl)

    return reply.status(201).send(shortCut)
  }
}
