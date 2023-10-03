import { Request, Response } from "express";
import * as operationsRepository from "./operationsRepository";
import { negotiate } from "./utils";

export function handleGetList(req: Request, res: Response) {
  const [operations, count] = operationsRepository.getList({
    operationTypes: req.query.operationType as string[],
    retailers: req.query.retailer as string[],
    clients: req.query.client as string[],
    rowsPerPage: parseInt(req.query.rowsPerPage as string),
    page: parseInt(req.query.page as string),
  });
  negotiate(res, { operations, count }, "operations");
}

export function handlePost(req: Request, res: Response) {
  res.sendStatus(200);
}

export function handleGet(req: Request, res: Response) {
  res.sendStatus(200);
}

export function handlePut(req: Request, res: Response) {
  res.sendStatus(200);
}
