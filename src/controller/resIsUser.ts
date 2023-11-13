import { Request ,Response } from "express";
import { chackIfUser } from "../servicers/chackIfUser";

export default async function resIsUser (req : Request, res: Response) {
    try{
        if (await chackIfUser(req.body.user)) {
            res.status(200).json('User in DB')
        } else {
            res.status(500).json('User not in DB')
        }
    } catch (err) {
        res.status(401).json({ err: err.message })
    }
}
