import {Request, Response} from 'express'
import { getDontatesService } from '../servicers/getDontatesService'

export async function resDonates (req: Request, res : Response) {
    try{
        const data = await getDontatesService(req.params.donates)       
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
}