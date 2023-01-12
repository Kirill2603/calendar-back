import {eventsCollection} from "./db";

export const eventsRepository = {
    async getEvents() {
        console.log('asd')
        return eventsCollection.find().toArray()
    },
}
