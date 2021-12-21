import { Router } from "express";
import { getAllGuidesController} from "../../controllers/guides/getAllGuidesController";
import { registerGuideController} from "../../controllers/guides/registerGuideController";
export const guidesRouter : Router = Router();

guidesRouter.get('/', getAllGuidesController)

guidesRouter.post('/register', registerGuideController)

export default guidesRouter;
