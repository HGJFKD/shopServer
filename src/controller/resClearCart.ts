import { Request, Response } from 'express'
import { serverClearCart } from '../servicers/serverClearCart'

export async function resClearCart(req: Request, res: Response) {

    try {
        const data = await serverClearCart(req.body)
        if (data) {
            const { cart } = data
            res.status(200).json(cart)
        }

    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage })
    }
}