"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singupRouter_1 = __importDefault(require("./routes/singupRouter"));
const shopRouter_1 = __importDefault(require("./routes/shopRouter"));
const authenticateToken_1 = require("./auth/authenticateToken");
const unless_1 = __importDefault(require("./middleware/unless"));
const resPageNotFound_1 = require("./controller/resPageNotFound");
const connectToMongoDB_1 = __importDefault(require("./DL/connectToMongoDB"));
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use((0, unless_1.default)('/singup', authenticateToken_1.authenticateToken));
app.use('/signup', singupRouter_1.default);
app.use('/shop', shopRouter_1.default);
app.use("*", resPageNotFound_1.resPageNotFound);
app.listen(3000, () => {
    (0, connectToMongoDB_1.default)();
    console.log('\n', chalk.blueBright(`Server is running !!`));
});
