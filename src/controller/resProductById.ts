import {Request, Response} from 'express'
import { serverProductsById } from '../servicers/serverProductsById'

export default async function resProductsById (req: Request, res : Response) {
    try{
        const data = await serverProductsById(req.params.product_id)       
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
}