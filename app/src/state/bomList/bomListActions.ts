import { Bom } from "../../../../common/types";

export enum BomListActionType {
  RETRIEVE_BOMS = "RETRIEVE_BOMS",
  ADD_BOM = "ADD_BOM",
}

type RetrieveBomsAction = {
  type: BomListActionType.RETRIEVE_BOMS;
  boms: Bom[];
};

type AddBomAction = {
  type: BomListActionType.ADD_BOM;
  bom: Bom;
};

export function RetrieveBoms(boms: Bom[]): RetrieveBomsAction {
  return {
    type: BomListActionType.RETRIEVE_BOMS,
    boms,
  };
}

export function AddBom(bom: Bom): AddBomAction {
  return {
    type: BomListActionType.ADD_BOM,
    bom,
  };
}

export type BomListAction = RetrieveBomsAction | AddBomAction;
