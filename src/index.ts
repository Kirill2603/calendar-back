import express, { Express} from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import {router} from "./routes/router";

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URI;

if (!DB_URL) {
  throw new Error('DB_URI not found')
}

const app: Express = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.end(`<div>${process.env.MONGODB_URI}</div>`)
})


app.use('/api', router)
app.get('/favicon.ico', (req, res) => res.status(204));

console.log(process.env.PORT)

app.listen(PORT, async () => {
  try {
    await mongoose.connect(DB_URL)
    mongoose.set('runValidators', true)
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 3000}`)
  } catch (e) {
    console.log(e)
  }
})
