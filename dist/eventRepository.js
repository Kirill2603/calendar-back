"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRepository = void 0;
const eventModel_1 = require("./models/eventModel");
exports.eventsRepository = {
    // async getEvents() {
    //     return eventsCollection.find().toArray()
    // },
    // async getEvent(id: string) {
    //     return eventsCollection.findOne({_id: new ObjectId(id) })
    // },
    // async getEventsInterval (start: number, end: number) {
    //     console.log(start, end)
    //     return eventsCollection
    //         .find({date: {"$gte": Number(start) , "$lt": Number(end) }}).toArray()
    // },
    addEvent(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const newasd = yield eventModel_1.event.create(body);
            console.log(newasd);
            return newasd;
            // return  eventsCollection.insertOne(event.create(body))
        });
    }
};
