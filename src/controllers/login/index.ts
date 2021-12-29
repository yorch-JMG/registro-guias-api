import { Response, Request } from "express";
import { connection } from "../../connection";
import mysql from "mysql2";
import jwt from "jsonwebtoken";

export const logInController = async (req : Request, res : Response) => {
  const {username, password} = req.body;
  console.log(req.body);
  
  const queryString = "SELECT * FROM admin WHERE username = ? AND password = ?";
  
  const query = mysql.format(queryString, [username, password]);

  connection.query(query, (err, result) => {
    if(err){
      console.error(err.message)
      return res.status(401).json(err.message)
    }
    if((result as []).length === 0){
      res.status(401).json("usuario o contraseña incorrectos")
    }
    else{
      let token = jwt.sign((result as any)[0]["username"], process.env.TOKEN_SECRET as string)
      res.status(200).json({token});
      };
    });
};
