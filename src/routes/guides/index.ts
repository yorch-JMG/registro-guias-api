import { Router } from "express";
import { getAllGuides} from "../../controllers/guides/getAllGuides.controller";
import { registerGuide} from "../../controllers/guides/registerGuide.controller";
export const guidesRouter : Router = Router();

guidesRouter.get('/', getAllGuides)

guidesRouter.post('/register', registerGuide)

export default guidesRouter;
