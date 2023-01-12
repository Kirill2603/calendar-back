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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const eventModel_1 = require("../models/eventModel");
const eventRepository_1 = require("../eventRepository");
exports.eventsRouter = express_1.default.Router({ mergeParams: true });
exports.eventsRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield eventModel_1.event.findByIdAndUpdate(req.params.id, { '$set': req.body }, {
            new: true,
            runValidators: true,
        }));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
exports.eventsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   res.send(await event.findById(req.params.id))
    // } catch (e: any) {
    //   res.statusCode = 500
    //   res.send(e.message)
    // }
    const event = yield eventRepository_1.eventsRepository.getEvent(req.params.id);
    res.send(event);
}));
exports.eventsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   if (req.query.start && req.query.end) {
    //     try {
    //       const eventsForMonth = await event.find({date: {$gte: req.query.start, $lte: req.query.end}})
    //       res.send(eventsForMonth)
    //     } catch (e: any) {
    //       console.log(e);
    //     }
    //   } else {
    //     try {
    //       res.send(await event.find({}))
    //     } catch (e: any) {
    //       res.statusCode = 500
    //       res.send(e.message)
    //     }
    // }
    if (req.query.start && req.query.end) {
        res.send(yield eventRepository_1.eventsRepository.getEventsInterval(req.query.start, req.query.end));
    }
    else
        res.send(yield eventRepository_1.eventsRepository.getEvents());
}));
exports.eventsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //
    //   const newEvent = await event.create(req.body)
    //   res.send(newEvent)
    // } catch (e: any) {
    //   res.statusCode = 500
    //   res.send(e.message)
    // }
    const newEvent = yield eventRepository_1.eventsRepository.addEvent(req.body);
    res.send(newEvent);
}));
exports.eventsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEvent = yield eventModel_1.event.findByIdAndDelete(req.params.id);
        res.send(deletedEvent);
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));