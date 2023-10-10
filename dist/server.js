"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerRouter_1 = __importDefault(require("./routes/registerRouter"));
const donorsRouter_1 = __importDefault(require("./routes/donorsRouter"));
const authenticateToken_1 = require("./auth/authenticateToken");
const unless_1 = __importDefault(require("./middleware/unless"));
const resPageNotFound_1 = require("./controller/resPageNotFound");
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use((0, unless_1.default)('/register', authenticateToken_1.authenticateToken));
app.use('/register', registerRouter_1.default);
app.use('/donors', donorsRouter_1.default);
app.use("*", resPageNotFound_1.resPageNotFound);
app.listen(3000, () => {
    // readCSVFile(filePath).then(data => data.forEach(person => insertPersonToDB(person)))
    console.log('\n', chalk.blueBright(`Server is running !!`));
});
