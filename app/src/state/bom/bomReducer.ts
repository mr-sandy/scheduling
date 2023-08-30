import { Bom } from "../../../../common/types";
import { BomActionType, BomAction } from "./bomActions";

function initialiseBom(): Bom {
  return {
    gatherFrequency: "daily",
    retailers: [
      {
        retailerId: "Tesco",
        multiStore: true,
        singleStore: true,
        banners: true,
      },
      {
        retailerId: "Waitrose",
        multiStore: false,
        singleStore: true,
        banners: false,
      },
    ],
    apps: [
      {
        retailerId: "ASDA",
        multiStore: true,
        singleStore: true,
        banners: true,
      },
      {
        retailerId: "Sainsburys",
        multiStore: false,
        singleStore: true,
        banners: false,
      },
    ],
  };
}

export function bomReducer(bom: Bom | null, action: BomAction): Bom | null {
  switch (action.type) {
    case BomActionType.INITIALISE_BOM: {
      return initialiseBom();
    }
    case BomActionType.SET_PROPERTY: {
      const keys = action.property;
      const hasKeys = Object.keys(action.property).length > 0;

      console.log(action.property);
      return { ...bom, ...action.property } as Bom;
    }
    default: {
      throw Error("Unknown BomActionType");
    }
  }
}
