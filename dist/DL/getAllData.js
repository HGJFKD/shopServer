"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataDL = void 0;
const connectToDB_1 = require("./connectToDB");
// Get all data func
async function getDataDL() {
    const res = await connectToDB_1.client.query('SELECT * FROM revenues.revenues');
    return res.rows;
}
exports.getDataDL = getDataDL;
