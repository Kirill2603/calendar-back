"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EventSchema = new mongoose_1.default.Schema({
    title: { type: String, required: [true, 'Please enter event title'], minLength: 3, maxLength: 100 },
    description: { type: String, required: false, minLength: 3, maxLength: 100, default: '' },
    priority: { type: String, enum: ['low', 'middle', 'high'], default: 'low' },
    created: { type: Date, default: Date.now() },
    is_done: { type: Boolean, default: false },
    from: { type: Date, default: null },
    to: { type: Date, default: null },
}, { collection: 'events' });
exports.event = mongoose_1.default.model('event', EventSchema);
