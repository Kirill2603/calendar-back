"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const mongoose = __importStar(require("mongoose"));
const EventSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Please enter event title'], minLength: 3, maxLength: 100 },
    description: { type: String, required: false, minLength: 3, maxLength: 100, default: '' },
    priority: { type: Number, min: 0, max: 3, default: 0 },
    color: { type: String, enum: ['red', 'green', 'blue', 'purple', 'orange', 'yellow'], default: 'green' },
    date: { type: Date, required: true },
    is_done: { type: Boolean, default: false },
    start: { type: Date, default: null },
    end: { type: Date, default: null },
}, { collection: 'events' });
exports.event = mongoose.model('event', EventSchema);
