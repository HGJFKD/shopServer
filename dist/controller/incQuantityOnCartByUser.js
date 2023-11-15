"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverIncQuantityOnCartByUser_1 = require("../servicers/serverIncQuantityOnCartByUser");
async function incQuantityOnCartByUser(req, res) {
    try {
        const data = await (0, serverIncQuantityOnCartByUser_1.serverIncQuantityOnCartByUser)(req.params.user_id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.default = incQuantityOnCartByUser;
