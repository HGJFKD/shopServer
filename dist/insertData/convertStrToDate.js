"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strToDate(dtStr) {
    if (!dtStr)
        return null;
    let dateParts = dtStr.split("/");
    let timeParts = dateParts[2].split(" ")[1].split(":");
    dateParts[2] = dateParts[2].split(" ")[0];
    return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
}
exports.default = strToDate;
