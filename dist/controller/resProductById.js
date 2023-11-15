"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverProductById_1 = require("../servicers/serverProductById");
async function resProductById(req, res) {
    try {
        const data = await (0, serverProductById_1.serverProductById)(req.params.product_id);
        res.status(200).json(data);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.default = resProductById;
