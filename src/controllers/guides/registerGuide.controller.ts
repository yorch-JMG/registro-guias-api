import { Response, Request} from "express";
import { connection } from "../../connection";
import mysql from "mysql2";

export const registerGuide = (req : Request, res : Response) => {
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
    if(result === null) res.status(401).json("No se pudo insertar en tabla guia");
    else{
      res.status(200).json(result);
    }
  });

};
