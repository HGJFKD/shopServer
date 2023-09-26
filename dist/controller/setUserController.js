"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserController = void 0;
const setUserServer_1 = require("../servicers/setUserServer");
async function setUserController(req, res) {
    try {
        const token = await (0, setUserServer_1.setUserServer)(req.body);
        res.status(200).json(token);
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.setUserController = setUserController;
