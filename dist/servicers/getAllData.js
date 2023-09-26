"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chackData = void 0;
const getAllData_1 = require("../DL/getAllData");
// Chek data func
async function chackData() {
    const data = await (0, getAllData_1.getDataDL)();
    if (!data)
        throw new Error('Error!, no data');
    return data;
}
exports.chackData = chackData;
