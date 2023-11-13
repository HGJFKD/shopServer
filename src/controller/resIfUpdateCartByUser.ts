import { Request, Response } from 'express'
import { serverUpdateCartByUser } from '../servicers/serverUpdateCartByUser'

export async function resIfUpdateCartByUser(req: Request, res: Response) {
    try {
        const data = await serverUpdateCartByUser(req.body)
        res.status(200).json("The cart has been updated successfully")
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}