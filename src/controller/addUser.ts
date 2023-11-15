import { Request, Response } from "express"
import { addUserServer } from "../servicers/addUserServer"

export async function addUser(req: Request, res: Response) {

    try {
        const token = await addUserServer(req.body)
        res.status(200).json(token)
    }
    catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(401).json({ err: errorMessage })
    }

}