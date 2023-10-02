import { Operation } from "../../common/types";
import { operations } from "./operations";

export function getList(query: {
  operationTypes: string[];
  rowsPerPage: number;
  page: number;
}): [Operation[], number] {
  const start = query.page * query.rowsPerPage;
  const end = start + query.rowsPerPage;

  const filtered = operations.filter(
    (operation) =>
      query.operationTypes === undefined ||
      query.operationTypes.includes(operation.operationType)
  );

  return [filtered.slice(start, end), filtered.length];
}

export function getItem(bomId: string) {
  return {};
}

export function addItem() {
  return {};
}

export function UpdateItem() {
  return {};
}
