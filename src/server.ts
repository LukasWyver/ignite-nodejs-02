import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })
