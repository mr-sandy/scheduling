import { Bom } from "../../../../common/types";
import { BomListAction, BomListActionType } from "./bomListActions";

export function bomListReducer(boms: Bom[], action: BomListAction) {
  console.log("we are in the reducer", boms);
  switch (action.type) {
    case BomListActionType.RETRIEVE_BOMS: {
      return action.boms;
    }
    case BomListActionType.ADD_BOM: {
      return [...boms, action.bom];
    }
    default: {
      throw Error("Unknown BomListActionType");
    }
  }
}
