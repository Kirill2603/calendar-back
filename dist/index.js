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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const router_1 = require("./routes/router");
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URI;
if (!DB_URL) {
    throw new Error('DB_URI not found');
}
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.end(`<div>${process.env.MONGODB_URI}</div>`);
});
app.use('/api', router_1.router);
app.get('/favicon.ico', (req, res) => res.status(204));
console.log(process.env.PORT);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(DB_URL);
        mongoose_1.default.set('runValidators', true);
        console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 3000}`);
    }
    catch (e) {
        console.log(e);
    }
}));
