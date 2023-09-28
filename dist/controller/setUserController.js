"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
const addUserServer_1 = require("../servicers/addUserServer");
async function addUserController(req, res) {
    try {
        const token = await (0, addUserServer_1.addUserServer)(req.body);
        res.status(200).json(token);
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.addUserController = addUserController;
