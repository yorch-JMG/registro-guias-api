import { Router } from "express";
import { guidesController } from "../../controllers/guides";
export const guidesRouter : Router = Router();

guidesRouter.get('/', guidesController)

export default guidesRouter;
