"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDontatesService = void 0;
const getDonatesByNameDL_1 = require("../DL/getDonatesByNameDL");
const getDonatesByZeout_1 = require("../DL/getDonatesByZeout");
async function getDontatesService(user) {
    let res;
    if (isNaN(+user) || user === '0') {
        res = await (0, getDonatesByNameDL_1.getDonatesByNameDL)(user);
    }
    else {
        res = await (0, getDonatesByZeout_1.getDonatesByZeoutDL)(user);
    }
    if (!res) {
        throw new Error('We did not find such a donor');
    }
    else {
        return res;
    }
}
exports.getDontatesService = getDontatesService;
