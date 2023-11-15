import { Request, Response } from 'express'
import { serverUpdateCartByUser } from '../servicers/serverUpdateCartByUser'

export async function resUpdateCart(req: Request, res: Response) {
    try {
        const cart = await serverUpdateCartByUser(req.body)
        res.status(200).json(cart)
    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage })
    }
}