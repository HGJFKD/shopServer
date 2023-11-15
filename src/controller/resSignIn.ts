import { Request, Response } from "express";
import { serverSignIn } from "../servicers/serverSignIn";
import ResSignIn from "../Types/typeResSignIn";

export default async function resSignIn(req: Request, res: Response) {
    try {
        const resSignIn: ResSignIn = await serverSignIn(req.body)
        res.status(200).json(resSignIn)
    } catch (err) {
        res.status(401).json({ err: err.message })
    }
}
