"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserServer = void 0;
const insertNewUser_1 = require("../DL/insertNewUser");
async function addUserServer(user) {
    const res = await (0, insertNewUser_1.insertNewUser)(user);
    if (res >= 0) {
        throw new Error('Error iserting!');
    }
    return true;
}
exports.addUserServer = addUserServer;
