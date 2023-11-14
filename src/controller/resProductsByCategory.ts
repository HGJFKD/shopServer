import { Request, Response } from 'express'
import { serverProductsByCategory } from '../servicers/serverProductsByCategory'

export async function resProductsByCategory(req: Request, res: Response) {
    try {
        const data = await serverProductsByCategory(req.params.category_id)
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}