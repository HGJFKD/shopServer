"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resData = void 0;
const getAllData_1 = require("../servicers/getAllData");
const resData = async (req, res) => {
    try {
        const data = await (0, getAllData_1.chackData)();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(403).json(err);
    }
};
exports.resData = resData;
