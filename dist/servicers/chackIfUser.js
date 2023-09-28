"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chackIfUser = void 0;
const getUser_1 = require("../DL/getUser");
async function chackIfUser(user) {
    const res = await (0, getUser_1.getUser)(user);
    if (res === 0) {
        return false;
    }
    return true;
}
exports.chackIfUser = chackIfUser;
