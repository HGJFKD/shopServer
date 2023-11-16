import { Request, Response } from "express";
import { serverSignIn } from "../servicers/serverSignIn";
import ResSignIn from "../Types/typeResSignIn";

export default async function resSignIn(req: Request, res: Response) {
    try {
        const { token, user_id } = await serverSignIn(req.body)
        res.status(200).json({ accessToken: token.accessToken, user_id: user_id })
    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(401).json({ err: errorMessage })
    }
}
