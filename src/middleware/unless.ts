import { Request, Response } from "express";

function startsWithUserOrShop(inputString: string): boolean {
    const firstFiveCharacters = inputString.substring(0, 5);
    return firstFiveCharacters.startsWith("/user") || firstFiveCharacters.startsWith("/shop");
}

export default function unless(path: string, middleware: Function) {
    return function (req: Request, res: Response, next: Function) {
        if (startsWithUserOrShop(path)) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};