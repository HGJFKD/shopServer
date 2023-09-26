"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resPageNotFound = void 0;
const resPageNotFound = (req, res) => res.status(404).send("Page not found!");
exports.resPageNotFound = resPageNotFound;
