import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql2";

export const checkTime = (req : Request, res : Response) => {
  const { idGuia } = req.body;
  const queryString = "CALL checkTime(?)"
  const query = mysql.format(queryString, [idGuia]);
  connection.query(query, (err, result : any) => {
    if(err){
      console.error(err.message)
      return res.status(401).json(err.message)
    }
    
    if(result === null) res.status(401).json("No hay check in para este id");
    else{
      console.log(result);
      
      res.status(200).json(result[0][0]["message"]);
    }
  });

};
