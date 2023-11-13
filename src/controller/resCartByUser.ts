import { Request, Response } from 'express'
import { serverCartByUser } from '../servicers/serverCartByUser'

export async function resCartByUser(req: Request, res: Response) {
    try {
        const data = await serverCartByUser(req.params.user_name)
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
}