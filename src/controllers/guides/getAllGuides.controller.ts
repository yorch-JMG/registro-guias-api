import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql";

export const getAllGuides = (req : Request, res : Response) => {
  
  const queryString = "SELECT * FROM guia";
  
  const query = mysql.format(queryString, []);

  connection.query(query, (err, result) => {
    if(err) throw err;
    if(result.length === 0) res.status(401).json("no hay guias que mostrar")
    else{
      const guides = result;
      res.status(200).json(guides);
      };
    });
};
