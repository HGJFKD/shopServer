"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const shopRouter_1 = __importDefault(require("./routes/shopRouter"));
const authenticateToken_1 = require("./auth/authenticateToken");
const resPageNotFound_1 = require("./controller/resPageNotFound");
const connectToMongoDB_1 = __importDefault(require("./DL/connectToMongoDB"));
const cartRouter_1 = __importDefault(require("./routes/cartRouter"));
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
// app.use(unless('/user', authenticateToken))
// app.use(unless('/shop', authenticateToken))
app.use('/user', userRouter_1.default);
app.use('/shop', shopRouter_1.default);
app.use('/cart', authenticateToken_1.authenticateToken, cartRouter_1.default);
app.use("*", resPageNotFound_1.resPageNotFound);
app.listen(3000, () => {
    (0, connectToMongoDB_1.default)();
    console.log('\n', chalk.blueBright(`Server is running !!`));
});
