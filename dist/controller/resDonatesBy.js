"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resDonates = void 0;
const getDontatesService_1 = require("../servicers/getDontatesService");
async function resDonates(req, res) {
    try {
        const data = await (0, getDontatesService_1.getDontatesService)(req.params.donates);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.resDonates = resDonates;
