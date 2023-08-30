import { Bom } from "../../common/types";

export function getList(): Bom[] {
  return [
    { id: "BOM-123", name: "Mars UK", client: "Mars UK" } as Bom,
    { id: "BOM-124", name: "Arla DE", client: "Arla DE" } as Bom,
    { id: "BOM-125", name: "Kelloggs US", client: "Kelloggs US" } as Bom,
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
