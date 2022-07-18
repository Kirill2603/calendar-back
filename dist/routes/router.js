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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const eventModel_1 = require("../models/eventModel");
exports.router = express_1.default.Router({ mergeParams: true });
exports.router.put('/events/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.router.get('/events/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield eventModel_1.event.findById(req.params.id));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
exports.router.get('/events', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.start && req.query.end) {
        try {
            const eventsForMonth = yield eventModel_1.event.find({ date: { $gte: req.query.start, $lte: req.query.end } });
            res.send(eventsForMonth);
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        try {
            res.send(yield eventModel_1.event.find({}));
        }
        catch (e) {
            res.statusCode = 500;
            res.send(e.message);
        }
    }
}));
exports.router.post('/events', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield eventModel_1.event.create(req.body);
        res.send(newEvent);
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
exports.router.delete('/events/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEvent = yield eventModel_1.event.findByIdAndDelete(req.params.id);
        res.send(deletedEvent);
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
