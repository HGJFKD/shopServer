"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resTopCategories = void 0;
const serverTopCategories_1 = require("../servicers/serverTopCategories");
async function resTopCategories(req, res) {
    try {
        const data = await (0, serverTopCategories_1.serverTopCategories)();
        res.status(200).json(data);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage });
    }
}
exports.resTopCategories = resTopCategories;
