import { Request, Response } from "express";
import { chackData } from "../servicers/getAllData";

export const resData = async (req: Request, res: Response) => {
    try {
        const data = await chackData()
        res.status(200).json(data)
    }   
    catch (err) {
        res.status(403).json(err)
    }
    
}