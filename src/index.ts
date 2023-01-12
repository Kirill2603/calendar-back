import express, { Express } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { eventsRouter } from './routes/eventsRouter'
import { runDb } from './db/db'

const PORT = process.env.PORT || 3000
const DB_URL = process.env.MONGODB_URI

if (!DB_URL) {
  throw new Error('DB_URI not found')
}

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end(`<div>Hello!</div>`)
})

app.use('/events', eventsRouter)

const startApp = async () => {
  await runDb()
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
}

startApp()
