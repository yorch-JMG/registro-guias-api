import { Router } from "express";
import { getAllGuidesController} from "../../controllers/guides/getAllGuides.controller";
import { registerGuideController} from "../../controllers/guides/registerGuide.controller";
export const guidesRouter : Router = Router();

guidesRouter.get('/', getAllGuidesController)

guidesRouter.post('/register', registerGuideController)

export default guidesRouter;
