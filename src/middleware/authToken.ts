import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


export const authToken = (req : Request, res : Response, next : NextFunction) => {
  const token = req.cookies.token;
  if(token){
    const payload = jwt.verify(token, process.env.TOKEN_SECRET as any)
    next()
  }else{
    res.status(403)
  }
}
