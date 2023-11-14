import {Request, Response} from 'express'
import { serverProductByTitle } from '../servicers/serverProductByTitle'

export default async function resProductByTitle (req: Request, res : Response) {
    try{
        const data = await serverProductByTitle(req.params.product_title)       
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}