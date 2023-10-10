import { Request, Response } from "express";
import { Register } from "../interfaces/typeRegister";
import getJWTToken from "../servicers/getJWTToken";

export async function resTokenToCleint(req: Request, res: Response) {
  const user: Register = req.body;
  try {
    const token = await getJWTToken(user);
    res.status(200).json(token);
  } catch (err) {
    res.status(401).json(err);
  }
}
