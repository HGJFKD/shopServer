import { Request, Response } from 'express'
import { serverTopCategories } from '../servicers/serverTopCategories'

export async function resTopCategories(req: Request, res: Response) {
    try {
        const data = await serverTopCategories()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}