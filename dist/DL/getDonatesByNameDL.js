"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDonatesByNameDL = void 0;
const connectToDB_1 = require("./connectToDB");
// Get all data func
async function getDonatesByNameDL(cleint_name) {
    const res = await connectToDB_1.client.query('SELECT * FROM revenues.revenues where client_name = $1', [cleint_name]);
    return res.rows;
}
exports.getDonatesByNameDL = getDonatesByNameDL;
