"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const addUserServer_1 = require("../servicers/addUserServer");
async function addUser(req, res) {
    try {
        const token = await (0, addUserServer_1.addUserServer)(req.body);
        res.status(200).json(token);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(401).json({ err: errorMessage });
    }
}
exports.addUser = addUser;
