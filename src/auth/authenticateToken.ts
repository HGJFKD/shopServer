import { Request ,Response} from 'express'
const jwt = require("jsonwebtoken");


export function authenticateToken(req : Request ,res: Response, next: Function){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).json({ message: 'Unauthorized: Missing token' })
    
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err : any, user: any) => {
      if (err) return res.status(401).json({ message: 'Unauthorized: Invalid token' })
      req.body.user = user
      next()
    })
    
  
  }