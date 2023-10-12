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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePut = exports.handleGet = exports.handlePost = exports.handleGetList = void 0;
const operationsRepository = __importStar(require("./operationsRepository"));
const utils_1 = require("./utils");
function handleGetList(req, res) {
    const [operations, count] = operationsRepository.getList({
        operationTypes: req.query.operationType,
        retailers: req.query.retailer,
        clients: req.query.client,
        rowsPerPage: parseInt(req.query.rowsPerPage),
        page: parseInt(req.query.page),
    });
    (0, utils_1.negotiate)(res, { operations, count }, "operations");
}
exports.handleGetList = handleGetList;
function handlePost(req, res) {
    const operations = req.body;
    operations.forEach((operation) => {
        operationsRepository.addItem(operation);
    });
    res.sendStatus(200);
}
exports.handlePost = handlePost;
function handleGet(req, res) {
    res.sendStatus(200);
}
exports.handleGet = handleGet;
function handlePut(req, res) {
    res.sendStatus(200);
}
exports.handlePut = handlePut;
