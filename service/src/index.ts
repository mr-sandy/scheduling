import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import * as operationsHandler from "./operationsHandler";
import hbs from 'hbs';

dotenv.config();

const app: Express = express();

//const port : number = process.env.PORT as unknown as number;
const port = 8080;
const host = "0.0.0.0";
const appBuidPath = path.join(__dirname, "..", "..", "app", "build");

app.use(express.static(appBuidPath));
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(cors());

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('views', path.join(appBuidPath));
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

app.get("/client-operations", operationsHandler.handleGetList);
app.post("/client-operations", operationsHandler.handlePost);

app.listen(port, host, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
