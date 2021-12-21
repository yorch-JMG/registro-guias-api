import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function authToken (req : Request, res : Response, next : NextFunction){
  const authHeader = req.headers['authorization'];
  if (typeof authHeader !== 'undefined'){
    const token = authHeader && authHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any) => {
                    console.log(err);
                    if(err) return res.status(403);
                    next()
                  });
  }
  else{
    return res.status(401)
  }


};
