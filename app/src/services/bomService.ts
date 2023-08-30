import axios from "axios";
import { Bom } from "../../../common/types";

export async function fetchBoms(): Promise<Bom[]> {
  console.log("FETCHING");
  try {
    const res = await axios.get<Bom[]>("http://localhost:8080/boms");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
  return [];
}
