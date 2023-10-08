"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const addUserServer_1 = require("../servicers/addUserServer");
async function addUser(req, res) {
    console.log(req.body);
    try {
        await (0, addUserServer_1.addUserServer)(req.body);
        res.status(200).json('User successfully added');
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.addUser = addUser;
