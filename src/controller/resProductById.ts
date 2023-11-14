import {Request, Response} from 'express'
import { serverProductById } from '../servicers/serverProductById'

export default async function resProductById (req: Request, res : Response) {
    try{
        const data = await serverProductById(req.params.product_id)       
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}