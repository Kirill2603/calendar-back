import {eventsCollection} from "./db/db";
import {ObjectId} from "mongodb";
import {Schema} from "mongoose";
import {event} from "./models/eventModel";

export const eventsRepository = {
    async getEvents() {
        return eventsCollection.find().toArray()
    },
    async getEvent(id: string) {
        return eventsCollection.findOne({_id: new ObjectId(id) })
    },
    async getEventsInterval (start: number, end: number) {
        console.log(start, end)
        return eventsCollection
            .find({date: {"$gte": Number(start) , "$lt": Number(end) }}).toArray()
    },
    async addEvent (body: any) {
      const newasd = await event.create(body)
        console.log(newasd)
        return newasd
      // return  eventsCollection.insertOne(event.create(body))
    }
}
