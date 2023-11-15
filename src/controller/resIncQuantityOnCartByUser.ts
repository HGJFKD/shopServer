import { Request, Response } from 'express'
import { serverChangeQuantityOnCartByUser } from '../servicers/serverChangeQuantityOnCartByUser'
import Changer from '../Types/enumChanger'

export default async function resIncQuantityOnCartByUser(req: Request, res: Response) {

    const changer: Changer = 0

    try {
        const data = await serverChangeQuantityOnCartByUser(req.body, changer)
        res.status(200).json(data)
    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage })
    }
}