import { Response, Request } from "express";

export const logOutController = (req : Request, res : Response) => {
  res.clearCookie("token").status(200).json("logout");
};
