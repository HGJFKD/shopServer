"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverChangeQuantityOnCartByUser_1 = require("../servicers/serverChangeQuantityOnCartByUser");
async function resDecQuantityOnCartByUser(req, res) {
    const changer = 1;
    try {
        const data = await (0, serverChangeQuantityOnCartByUser_1.serverChangeQuantityOnCartByUser)(req.body, changer);
        res.status(200).json(data);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.default = resDecQuantityOnCartByUser;
