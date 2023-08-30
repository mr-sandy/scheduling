"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const bomHandler = __importStar(require("./bomHandler"));
const hbs_1 = __importDefault(require("hbs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//const port : number = process.env.PORT as unknown as number;
const port = 8080;
const host = "0.0.0.0";
const appBuidPath = path_1.default.join(__dirname, "..", "..", "app", "build");
app.use(express_1.default.static(appBuidPath));
app.use(express_1.default.static("public"));
app.use(express_1.default.json()); // for parsing application/json
app.use((0, cors_1.default)());
//app.set('view engine', 'hbs');
app.set('view engine', 'html');
app.engine('html', hbs_1.default.__express);
app.set('views', path_1.default.join(appBuidPath));
hbs_1.default.registerHelper('json', function (context) {
    return JSON.stringify(context);
});
app.get("/boms", bomHandler.handleGetList);
app.post("/boms", bomHandler.handlePost);
app.get("/boms/:id", bomHandler.handleGet);
app.put("/boms/:id", bomHandler.handlePut);
app.listen(port, host, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
