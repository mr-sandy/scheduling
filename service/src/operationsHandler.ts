import { Request, Response } from "express";
import * as operationsRepository from "./operationsRepository";
import { negotiate } from "./utils";

export function handleGetList(req: Request, res: Response) {
  const operationTypes = req.query.operationType as string[];
  const rowsPerPage = req.query.rowsPerPage as string;
  const operations = operationsRepository.getList({
    operationTypes,
    rowsPerPage: parseInt(rowsPerPage),
  });

  negotiate(res, operations, "operations");
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
