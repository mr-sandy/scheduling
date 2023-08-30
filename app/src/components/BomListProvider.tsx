import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { Bom } from "../../../common/types";
import { useEffect } from "react";
import { fetchBoms } from "../services/bomService";
import { bomListReducer } from "../state/bomList/bomListReducer";
import { RetrieveBoms } from "../state/bomList/bomListActions";

const BomListContext = createContext<Bom[]>([]);
const BomListDispatchContext = createContext<Dispatch<any>>(() => {});

export function BomListProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [boms, dispatch] = useReducer(bomListReducer, []);

  useEffect(() => {
    fetchBoms().then((r) => {
      dispatch(RetrieveBoms(r));
    });
  }, []);

  return (
    <BomListContext.Provider value={boms}>
      <BomListDispatchContext.Provider value={dispatch}>
        {children}
      </BomListDispatchContext.Provider>
    </BomListContext.Provider>
  );
}

export function useBoms() {
  return useContext(BomListContext);
}

export function useBomsDispatch() {
  return useContext(BomListDispatchContext);
}
