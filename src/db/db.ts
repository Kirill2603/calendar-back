import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

// Connection URL
const url = process.env.MONGODB_URI || ''
if (!url) {
  throw new Error("❗ Url doesn't found")
}

runDb().catch(err => console.log(err))

export async function runDb() {
  await mongoose.connect(url)
}
