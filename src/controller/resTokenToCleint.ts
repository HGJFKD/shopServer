import { Request , Response} from "express"
import { JWTCode } from "../interfaces/typeJWTCode"

import { addUserServer } from "../servicers/addUserServer"
import { createJWTToken } from "../auth/createJWTToken"
import { chackIfUser } from "../servicers/chackIfUser"

export async function resTokenToCleint (req : Request , res: Response){
    const {user} = req.body.user
    try{
            const token : Record<string, JWTCode> =  createJWTToken(user)
            res.status(200).json(token) 
        }
     catch (err) {
        res.status(401).json(err)
    }
    
}