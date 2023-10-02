import axios from "axios";
import { Operation } from "../../../common/types";

export async function fetchOperations({
  operationTypes,
  rowsPerPage,
}: {
  operationTypes: string[],
  rowsPerPage: number,
}): Promise<Operation[]> {
  const queryParams = new URLSearchParams();
  operationTypes.forEach((operationType) =>
    queryParams.append("operationType", operationType)
  );
  queryParams.append("rowsPerPage", rowsPerPage.toString());

  try {
    const res = await axios.get<Operation[]>(
      `http://localhost:8080/operations?${queryParams.toString()}`
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
  return [];
}
