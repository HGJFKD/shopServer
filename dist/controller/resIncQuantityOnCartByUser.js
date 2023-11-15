"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverChangeQuantityOnCartByUser_1 = require("../servicers/serverChangeQuantityOnCartByUser");
async function resIncQuantityOnCartByUser(req, res) {
    const changer = 0;
    try {
        const data = await (0, serverChangeQuantityOnCartByUser_1.serverChangeQuantityOnCartByUser)(req.body, changer);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.default = resIncQuantityOnCartByUser;
