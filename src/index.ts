import express, { Express } from 'express'
import mongoose from 'mongoose'
import { router } from './routes/router'
import cors from 'cors'

const app: Express = express()
const DB_URL = process.env.MONGODB_URI || 'mongodb+srv://vercel-admin-user:2AJZ42DYNoRNiXrd@cluster0.9120nn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end(`<div>Hello</div>`)
})

app.use('/api', router)
app.get('/favicon.ico', (req, res) => res.status(204));



app.listen(PORT, async () => {
  try {
    await mongoose.connect(DB_URL)
    mongoose.set('runValidators', true)
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 3000}`)
  } catch (e) {
    console.log(e)
  }
})