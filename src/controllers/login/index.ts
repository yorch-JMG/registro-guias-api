import { Response, Request } from "express";
import { connection } from "../../connection";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import {User} from "../../models/User";
export const logInController = (req : Request, res : Response) => {
  const {username, password} = req.body;
  
  const queryString = "SELECT * FROM admin WHERE username = ? AND password = ?";
  
  const query = mysql.format(queryString, [username, password]);

  connection.query(query, (err, result) => {
    if(err) throw err;
    if(result.length === 0) res.status(401).json("no hay usuario con esos parametros")
    else{
      const user = result[0]["username"];
      const token = jwt.sign({user}, 
                             process.env.TOKEN_SECRET as string, 
                             {expiresIn: process.env.TOKEN_LIFESPAN});
      res.json(token);
    };


    });
};
