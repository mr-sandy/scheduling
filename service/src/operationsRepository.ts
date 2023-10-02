import { Operation } from "../../common/types";

export function getList(): Operation[] {
  return [
    {
      id: "1",
      retailer: "Tesco",
      client: "Mars UK",
      schedule: "daily",
      operationType: "category",
    } as Operation,
    {
      id: "2",
      retailer: "Amazon-DE",
      client: "Arla DE",
      schedule: "daily",
      operationType: "category",
    } as Operation,
    {
      id: "3",
      retailer: "Walmart-US",
      client: "Kelloggs US",
      schedule: "daily",
      operationType: "category",
    } as Operation,
  ];
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
