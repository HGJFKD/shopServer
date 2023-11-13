
import { Request, Response } from "express"

import { addUserServer } from "../servicers/addUserServer"

export async function addUser(req: Request, res: Response) {

    try {
        const token = await addUserServer(req.body)
        res.status(200).json(token)
    }
    catch (err) {
        res.status(401).json({ err: err.message })
    }
}