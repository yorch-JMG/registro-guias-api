import { Response, Request } from "express";
import { connection } from "../../connection";
import mysql from "mysql2";
import jwt from "jsonwebtoken";

export const logInController = async (req : Request, res : Response) => {
  const {username, password} = req.body;
  
  const queryString = "SELECT * FROM admin WHERE username = ? AND password = ?";
  
  const query = mysql.format(queryString, [username, password]);

  connection.query(query, (err, result) => {
    if(err) throw err;
    if((result as []).length === 0) res.status(401).json("no hay usuario con esos parametros")
    else{
      res.status(200).json({result});
      };
    });
};
