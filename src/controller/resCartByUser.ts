import { Request, Response } from 'express'
import { serverCartByUser } from '../servicers/serverCartByUser'

export async function resCartByUser(req: Request, res: Response) {
    try {
        const data = await serverCartByUser(req.params._id)
        const { cart } = data
        res.status(200).json(cart.products)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}