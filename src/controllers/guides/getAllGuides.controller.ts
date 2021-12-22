import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql2";

export const getAllGuides = async (req : Request, res : Response) => {
  
  const queryString = "call getGuiasInfo();";
  
  const query = mysql.format(queryString, []);

  connection.query(query, (err, result) => {
    if(err) throw err;
    if(result === null) res.status(401).json("no hay guias que mostrar")
    else{
      const guides = result;
      res.status(200).json(guides);
      };
    });

};
