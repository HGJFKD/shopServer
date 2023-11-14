import { Request, Response } from "express";
import { serverSignIn } from "../servicers/serverSignIn";

export default async function resSignIn(req: Request, res: Response) {
    try {
        await serverSignIn(req.body)
        res.status(200).json('User connected successfully')
    } catch (err) {
        res.status(401).json({ err: err.message })
    }
}
