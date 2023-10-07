import fastify from 'fastify'
import { env } from './env'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })
