import { Router } from "express";
import { logInController } from "../../controllers/login";
import {logOutController} from "../../controllers/logout";
export const loginRouter : Router = Router();

loginRouter.post('/login', logInController);
loginRouter.get('/logout', logOutController);

export default loginRouter;
