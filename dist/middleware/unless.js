"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function startsWithUserOrShop(inputString) {
    const firstFiveCharacters = inputString.substring(0, 5);
    return firstFiveCharacters.startsWith("/user") || firstFiveCharacters.startsWith("/shop");
}
function unless(path, middleware) {
    return function (req, res, next) {
        if (startsWithUserOrShop(path)) {
            return next();
        }
        else {
            return middleware(req, res, next);
        }
    };
}
exports.default = unless;
;
