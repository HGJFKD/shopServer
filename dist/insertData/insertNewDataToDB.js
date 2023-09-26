"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectToDB_1 = require("../DL/connectToDB");
const convertStrToDate_1 = __importDefault(require("./convertStrToDate"));
async function insertPersonToDB(person) {
    const { Zeout, ClientName, Adresse, Phone, Mail, Amount, TransactionTime, makor, Category, Notes } = person;
    // connect
    const query = {
        text: 'INSERT INTO revenues.revenues (zeout, client_name, adresse, phone, email, amount, transaction_time, makor, category, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        values: [+Zeout, ClientName, Adresse, Phone, Mail, +Amount, (0, convertStrToDate_1.default)(TransactionTime), makor, Category, Notes],
    };
    const res = await connectToDB_1.client.query(query);
    return res.command;
}
exports.default = insertPersonToDB;
