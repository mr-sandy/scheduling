import axios from "axios";
import { Operation } from "../../../common/types";

export async function fetchOperations(): Promise<Operation[]> {
  console.log("FETCHING");
  try {
    const res = await axios.get<Operation[]>(
      "http://localhost:8080/operations"
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
  return [];
}
