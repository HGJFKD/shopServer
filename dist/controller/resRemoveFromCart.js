"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resRemoveFromCart = void 0;
const serverRemoveFromCart_1 = require("../servicers/serverRemoveFromCart");
async function resRemoveFromCart(req, res) {
    try {
        const data = await (0, serverRemoveFromCart_1.serverRemoveFromCart)(req.body);
        if (data) {
            const { cart } = data;
            res.status(200).json(cart);
        }
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.resRemoveFromCart = resRemoveFromCart;
