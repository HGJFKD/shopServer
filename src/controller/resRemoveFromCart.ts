import { Request, Response } from 'express'
import { serverRemoveFromCart } from '../servicers/serverRemoveFromCart'

export async function resRemoveFromCart(req: Request, res: Response) {

    try {
        const data = await serverRemoveFromCart(req.body)
        if (data) {
            const { cart } = data
            res.status(200).json(cart)
        }

    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage })
    }
}