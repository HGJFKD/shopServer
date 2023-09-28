
import { Request , Response} from "express"
import { JWTCode } from "../interfaces/typeJWTCode"
import { addUserServer } from "../servicers/addUserServer"
    
export async function addUser (req : Request , res: Response){
    try{
        await addUserServer(req.body)
        res.status(200).json('User sec....') 
        }
    catch (err) {
        res.status(401).json(err)
    }
}