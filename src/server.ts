import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })
