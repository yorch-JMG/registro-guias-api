import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authToken = (req : Request, res : Response, next : NextFunction) =>{
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401);

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user : any) => {
                    console.log(err);
                    if(err) return res.status(403);
                    next()
                  });

};
