
import { Request , Response} from "express"

import { addUserServer } from "../servicers/addUserServer"
    
export async function addUser (req : Request , res: Response){
    console.log(req.body);
    try{
        await addUserServer(req.body)
        res.status(200).json('User successfully added') 
        }
    catch (err) {
        res.status(401).json(err)
    }
}