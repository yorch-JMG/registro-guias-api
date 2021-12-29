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

export const getReport = async (req : Request, res : Response) => {
  const {duration} = req.body;
  console.log(req.body);
  
  const queryString = "call getReport(?)";
  
  const query = mysql.format(queryString, [duration]);

  connection.query(query, (err, result) => {
    if(err){
      console.error(err.message)
      return res.status(401).json(err.message)
    }
    if((result as []).length === 0){
      res.status(401).json("usuario o contraseña incorrectos")
    }
    else{
      res.status(200).json(result)
      };
    });
};
