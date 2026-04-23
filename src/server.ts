import { buildApp } from './app'

const app = buildApp()
const port = Number(process.env.PORT ?? 3333)

async function start() {
  try {
    await app.listen({
      host: '0.0.0.0',
      port,
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

void start()
