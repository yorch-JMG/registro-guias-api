import { Response, Request } from "express";
import { connection } from "../../connection";
import mysql from "mysql2";
import jwt from "jsonwebtoken";

export const getDailyReport = (req : Request, res : Response) => {
  
  
  const queryString = "call getDailyReport()";
  
  const query = mysql.format(queryString);

  connection.query(query, (err, result : any) => {
    if(err) throw err;
    if(result === null) res.status(401).json("no hay usuario con esos parametros")
    else{
      res.json(result);
    };
    });
};
