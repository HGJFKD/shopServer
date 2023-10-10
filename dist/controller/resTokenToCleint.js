"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resTokenToCleint = void 0;
const getJWTToken_1 = __importDefault(require("../servicers/getJWTToken"));
async function resTokenToCleint(req, res) {
    const user = req.body;
    try {
        const token = await (0, getJWTToken_1.default)(user);
        res.status(200).json(token);
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.resTokenToCleint = resTokenToCleint;
