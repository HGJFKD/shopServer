"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserServer = void 0;
const insertNewUser_1 = require("../DL/insertNewUser");
const createJWTToken_1 = require("../auth/createJWTToken");
async function setUserServer(user) {
    const res = await (0, insertNewUser_1.insertNewUser)(user);
    if (res !== "INSERT") {
        throw new Error('Error!');
    }
    const token = (0, createJWTToken_1.createJWTToken)(user);
    return token;
}
exports.setUserServer = setUserServer;
