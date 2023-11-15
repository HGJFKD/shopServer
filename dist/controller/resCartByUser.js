"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resCartByUser = void 0;
const serverCartByUser_1 = require("../servicers/serverCartByUser");
async function resCartByUser(req, res) {
    const { user_id } = req.params;
    try {
        const data = await (0, serverCartByUser_1.serverCartByUser)(user_id);
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
exports.resCartByUser = resCartByUser;
