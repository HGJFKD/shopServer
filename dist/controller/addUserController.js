"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
const addUserServer_1 = require("../servicers/addUserServer");
const createJWTToken_1 = require("../auth/createJWTToken");
const chackIfUser_1 = require("../servicers/chackIfUser");
async function addUserController(req, res) {
    const { user } = req.body.user;
    let token;
    try {
        if (await (0, chackIfUser_1.chackIfUser)(user)) {
            const token = (0, createJWTToken_1.createJWTToken)(user);
        }
        else {
            const token = await (0, addUserServer_1.addUserServer)(user);
        }
        const token = (0, createJWTToken_1.createJWTToken)(user);
        res.status(200).json(token);
    }
    catch (err) {
        res.status(401).json(err);
    }
}
exports.addUserController = addUserController;
