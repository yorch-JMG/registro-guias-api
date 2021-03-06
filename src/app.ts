import express, {Application} from "express";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import cors from 'cors';
import cookies from 'cookie-parser';
import loginRouter from "./routes/auth";
import guidesRouter from "./routes/guides";
import reportsRouter from "./routes/reports/report";

export class App {
  
  private app: Application;

  constructor(private port? : number | string) {
    this.app = express();
    this.middlewares();
  }
  
  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000)
  }

  middlewares() {
    this.app.use(cookies())
    this.app.use(express.json())
    this.app.use(morgan('dev'));
    this.app.use(cors())
    this.app.use("/auth", loginRouter);
    this.app.use("/guides", guidesRouter);
    this.app.use("/reports", reportsRouter);
    
  }

  async listen() {
    this.app.listen(this.port);
    console.log("listening on port", this.port);
  }
}
