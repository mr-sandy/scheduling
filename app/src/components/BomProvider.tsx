import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { Bom } from "../../../common/types";
import { bomReducer } from "../state/bom/bomReducer";

const BomContext = createContext<Bom | null>(null);
const BomDispatchContext = createContext<Dispatch<any>>(() => {});

export function BomProvider({ children }: { children: React.ReactElement }) {
  const [bom, dispatch] = useReducer(bomReducer, null);

  return (
    <BomContext.Provider value={bom}>
      <BomDispatchContext.Provider value={dispatch}>
        {children}
      </BomDispatchContext.Provider>
    </BomContext.Provider>
  );
}

export function useBom() {
  return useContext(BomContext);
}

export function useBomDispatch() {
  return useContext(BomDispatchContext);
}
