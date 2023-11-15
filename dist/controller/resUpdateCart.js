"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resUpdateCart = void 0;
const serverUpdateCartByUser_1 = require("../servicers/serverUpdateCartByUser");
async function resUpdateCart(req, res) {
    try {
        const cart = await (0, serverUpdateCartByUser_1.serverUpdateCartByUser)(req.body);
        res.status(200).json(cart);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.resUpdateCart = resUpdateCart;
