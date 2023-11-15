import { Request, Response } from 'express'
import { serverCartByUser } from '../servicers/serverCartByUser'

export async function resCartByUser(req: Request, res: Response) {
    const { user_id } = req.params

    try {
        const data = await serverCartByUser(user_id)
        if (data) {
            const { cart } = data

            res.status(200).json(cart)
        }

    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "An error occurred";
        res.status(500).json({ err: errorMessage })
    }
}