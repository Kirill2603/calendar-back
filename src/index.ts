import express, { Express } from 'express'
import mongoose from 'mongoose'
import { router } from './models/routes/router'
import cors from 'cors'

const app: Express = express()
const port = 3000
const DB_URL = 'mongodb+srv://kirill:kirill@cluster0.9120nn6.mongodb.net/calendar?retryWrites=true&w=majority'


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  try {
    await mongoose.connect(DB_URL)
    mongoose.set('runValidators', true)
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  } catch (e) {
    console.log(e)
  }
})