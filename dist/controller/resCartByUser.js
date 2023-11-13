"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resCartByUser = void 0;
const serverCartByUser_1 = require("../servicers/serverCartByUser");
async function resCartByUser(req, res) {
    try {
        const data = await (0, serverCartByUser_1.serverCartByUser)(req.params.user_name);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.resCartByUser = resCartByUser;
