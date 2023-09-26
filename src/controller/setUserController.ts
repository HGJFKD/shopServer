import { Request , Response} from "express"
import { JWTCode } from "../interfaces/typeJWTCode"
import { setUserServer } from "../servicers/setUserServer"

export async function setUserController (req : Request , res: Response){
    try{
        const token : Record<string, JWTCode> = await setUserServer(req.body)
        res.status(200).json(token)
    } catch (err) {
        res.status(401).json(err)
    }
    
}