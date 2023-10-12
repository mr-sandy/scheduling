import axios from "axios";
import { Operation } from "../../../common/types";

export async function fetchOperations({
  operationTypes,
  retailers,
  clients,
  rowsPerPage,
  page,
}: {
  operationTypes: string[];
  retailers: string[];
  clients: string[];
  rowsPerPage: number;
  page: number;
}): Promise<{ operations: Operation[]; count: number }> {
  const queryParams = new URLSearchParams();

  operationTypes.forEach((operationType) =>
    queryParams.append("operationType", operationType)
  );

  retailers.forEach((retailer) => queryParams.append("retailer", retailer));
  clients.forEach((client) => queryParams.append("client", client));

  queryParams.append("rowsPerPage", rowsPerPage.toString());
  queryParams.append("page", page.toString());

  try {
    const res = await axios.get<{ operations: Operation[]; count: number }>(
      `http://localhost:8080/operations?${queryParams.toString()}`
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
  return { operations: [], count: 0 };
}

export async function createOperations(
  operations: Operation[]
): Promise<boolean> {
  try {
    await axios.post(`http://localhost:8080/operations`, operations);
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}
