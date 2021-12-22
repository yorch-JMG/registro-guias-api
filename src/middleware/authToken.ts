import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function authToken (req : Request, res : Response, next : NextFunction){
  next()
};
