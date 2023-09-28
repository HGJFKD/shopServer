"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unless(path, middleware) {
    return function (req, res, next) {
        if (path === req.path) {
            return next();
        }
        else {
            return middleware(req, res, next);
        }
    };
}
exports.default = unless;
;
