"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resProductsByCategory = void 0;
const serverProductsByCategory_1 = require("../servicers/serverProductsByCategory");
async function resProductsByCategory(req, res) {
    try {
        const data = await (0, serverProductsByCategory_1.serverProductsByCategory)(req.params.category_id);
        res.status(200).json(data);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.resProductsByCategory = resProductsByCategory;
