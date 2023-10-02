import { Operation } from "../../common/types";
import { operations } from "./operations";

export function getList(query: {
  operationTypes: string[];
  rowsPerPage: number;
}): Operation[] {
  return operations
    .filter(
      (operation) =>
        query.operationTypes === undefined ||
        query.operationTypes.includes(operation.operationType)
    )
    .slice(0, query.rowsPerPage);
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
