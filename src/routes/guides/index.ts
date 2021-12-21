import { Router } from "express";
import { guidesController, registerGuideController } from "../../controllers/guides";
export const guidesRouter : Router = Router();

guidesRouter.get('/', guidesController)

guidesRouter.post('/register', registerGuideController)

export default guidesRouter;
