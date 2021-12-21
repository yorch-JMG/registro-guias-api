import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql";

export const guidesController = (req : Request, res : Response) => {
  
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

export const registerGuideController = (req : Request, res : Response) => {
  const {idGuia, 
         nombre1, 
         nombre2, 
         apellidoPaterno, 
         apellidoMaterno,
         prestacion,
         fechaNacimiento,
         turno,
         servicio,
         horasRealizadas,
         genero} = req.body;
  const queryString = "INSERT INTO guia (idGuia, nombre1, nombre2, apellidoPaterno, apellidoMaterno, prestacion, fechaNacimiento, turno, servicio, horasRealizadas, genero) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
  const query = mysql.format(queryString,
                             [idGuia, 
                              nombre1, 
                              nombre2, 
                              apellidoPaterno, 
                              apellidoMaterno,
                              prestacion,
                              fechaNacimiento,
                              turno,
                              servicio,
                              horasRealizadas,
                              genero]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    if(result.length === 0) res.status(401).json("No se pudo insertar en tabla guia");
    else{
      res.status(200).json(result);
    }
  });

};
