"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resIfUpdateCartByUser = void 0;
const serverUpdateCartByUser_1 = require("../servicers/serverUpdateCartByUser");
async function resIfUpdateCartByUser(req, res) {
    try {
        const data = await (0, serverUpdateCartByUser_1.serverUpdateCartByUser)(req.body);
        res.status(200).json("The cart has been updated successfully");
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.resIfUpdateCartByUser = resIfUpdateCartByUser;
