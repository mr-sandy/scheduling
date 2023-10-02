import axios from "axios";
import { Operation } from "../../../common/types";

export async function fetchOperations({
  operationTypes,
  rowsPerPage,
}: {
  operationTypes: string[];
  rowsPerPage: number;
}): Promise<{ operations: Operation[]; count: number }> {
  const queryParams = new URLSearchParams();
  operationTypes.forEach((operationType) =>
    queryParams.append("operationType", operationType)
  );
  queryParams.append("rowsPerPage", rowsPerPage.toString());

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
