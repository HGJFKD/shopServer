"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDonatesByZeoutDL = void 0;
const connectToDB_1 = require("./connectToDB");
// Get all data func
async function getDonatesByZeoutDL(zeout) {
    const res = await connectToDB_1.client.query('SELECT * FROM revenues.revenues where zeout = $1', [zeout.toString()]);
    return res.rows;
}
exports.getDonatesByZeoutDL = getDonatesByZeoutDL;
