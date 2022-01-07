import { Response, Request } from "express";
import { connection } from "../../connection";
import mysql from "mysql2";

export const updateHours = (req: Request, res: Response) => {
    const hours = req.body[0];
    const list = req.body[1];
    let result;
    const queryString = "call agregarHoras(?,?)";

    for (const x in list) {
        const query = mysql.format(queryString, [hours, list[x]]);
        connection.query(query, (err, res: any) => {
            if (err) {
                console.error(err.message)
                return res.status(401).json(err.message)
            }
        });
    }
    res.status(200).json(result);
};
