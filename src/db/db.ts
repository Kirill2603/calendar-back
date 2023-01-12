import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config()

// Connection URL
const url = process.env.MONGODB_URI || ''
if (!url) {
    throw new Error('❗ Url doesn\'t found')
}

// export const eventsCollection = client.db().collection('events');

// export const runDb = async () => {
//     try {
//         await mongoose.connect(url);
//         console.log('✅ Connected successfully to server');
//     } catch (e) {
//         console.log('❗ Don\'t connected successfully to server');
//     }
// };

runDb().catch(err => console.log(err));

export async function runDb() {
    await mongoose.connect(url);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

