import { Router } from "express";
import { getDailyReport } from "../../controllers/reports/getReports";

export const reports : Router = Router();

reports.get('/dailyReports', getDailyReport);

export default reports;