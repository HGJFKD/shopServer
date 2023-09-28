"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resTokenToCleint = void 0;
const createJWTToken_1 = require("../auth/createJWTToken");
async function resTokenToCleint(req, res) {
    const { user } = req.body.user;
    try {
        const token = (0, createJWTToken_1.createJWTToken)(user);
        res.status(200).json(token);
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.resTokenToCleint = resTokenToCleint;
