import { Router } from "express";
import { getDailyReport, getReport } from "../../controllers/reports/getReports";

export const reports : Router = Router();

reports.get('/dailyReports', getDailyReport);
reports.post('/getReport', getReport);

export default reports;