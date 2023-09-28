import { JWTCode } from "../interfaces/typeJWTCode"
import { Register } from "../interfaces/typeRegister";

const jwt = require("jsonwebtoken");

export function createJWTToken (res : Register ): Record<string,JWTCode>{
    const  user = res.userName
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    return {accessToken:accessToken}
};