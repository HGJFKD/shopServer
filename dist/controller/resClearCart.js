"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resClearCart = void 0;
const serverClearCart_1 = require("../servicers/serverClearCart");
async function resClearCart(req, res) {
    try {
        const data = await (0, serverClearCart_1.serverClearCart)(req.body);
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
exports.resClearCart = resClearCart;
