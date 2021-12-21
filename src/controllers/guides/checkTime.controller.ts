import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql2";

export const checkTime = (req : Request, res : Response) => {
  const { idGuia } = req.body;
  const queryString = "CALL checkTime(?)"
  const query = mysql.format(queryString, [idGuia]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    if(result === null) res.status(401).json("No hay check in para este id");
    else{
      res.status(200).json(result);
    }
  });

};
