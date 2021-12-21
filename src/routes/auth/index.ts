import { Router } from "express";
import { logInController } from "../../controllers/login";
export const loginRouter : Router = Router();

loginRouter.post('/login', logInController)

export default loginRouter;
