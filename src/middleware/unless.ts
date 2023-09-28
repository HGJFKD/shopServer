import { Request ,Response } from "express";

export default function unless (path : string, middleware: Function) {
    return function(req : Request, res: Response, next: Function) {
        if (path === req.path) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};