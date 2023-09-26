import { JWTCode } from "../interfaces/typeJWTCode"
import { SingUp } from "../interfaces/typeSingUp";

const jwt = require("jsonwebtoken");

export function createJWTToken (res : SingUp ): Record<string,JWTCode>{
    const  user = res.user 
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    return {accessToken:accessToken}
};