import { Router } from "express";
import { getAllGuides} from "../../controllers/guides/getAllGuides.controller";
import { registerGuide} from "../../controllers/guides/registerGuide.controller";
import { checkTime } from "../../controllers/guides/checkTime.controller";
import { authToken } from "../../middleware/authToken";
import { updateHours } from "../../controllers/guides/updateHours";
export const guidesRouter : Router = Router();

guidesRouter.get('/', getAllGuides);

guidesRouter.post('/register', registerGuide);

guidesRouter.post('/checkTime', checkTime);

guidesRouter.put('/updateHours', updateHours);

export default guidesRouter;
