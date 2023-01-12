import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()

// Connection URL
const url = process.env.MONGODB_URI
console.log('url :', url)
if (!url) {
    throw new Error('❗ Url doesn\'t found')
}
const client = new MongoClient(url);

export const eventsCollection = client.db().collection('events');

export const runDb = async () => {
    try {
        await client.connect();
        console.log('✅ Connected successfully to server');
    } catch (e) {
        console.log('❗ Don\'t connected successfully to server');
        await client.close()
    }
};


