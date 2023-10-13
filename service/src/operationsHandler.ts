import { Request, Response } from "express";
import * as operationsRepository from "./operationsRepository";
import { negotiate } from "./utils";
import { Operation } from "../../common/types";
import { parseBool } from "./utils";

export function handleGetList(req: Request, res: Response) {
  const [operations, count] = operationsRepository.getList({
    operationTypes: req.query.operationType as string[],
    retailers: req.query.retailer as string[],
    clients: req.query.client as string[],
    rowsPerPage: parseInt(req.query.rowsPerPage as string),
    page: parseInt(req.query.page as string),
    multistore: parseBool(req.query.multistore as string),
  });
  negotiate(res, { operations, count }, "operations");
}

export function handlePost(req: Request, res: Response) {
  const operations = req.body as Operation[];
  operations.forEach((operation) => {
    operationsRepository.addItem(operation);
  });
  res.sendStatus(200);
}