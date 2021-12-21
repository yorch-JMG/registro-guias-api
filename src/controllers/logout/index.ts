import { Response, Request } from "express";

export const logOutController = (req : Request, res : Response) => {
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect('/');
};
