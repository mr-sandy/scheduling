import React, { createContext, useContext, useState } from "react";
import { Retailer, fetchRetailers } from "../services/retailersService";
import { useEffect } from "react";

const RetailerListContext = createContext<Retailer[]>([]);

export function RetailerListProvider({ children }: { children: React.ReactElement }) {
  const [retailers, setRetailers] = useState<Retailer[]>([]);

  useEffect(() => {
    fetchRetailers().then((r) => setRetailers(r));
  }, []);

  return (
    <RetailerListContext.Provider value={retailers}>
      {children}
    </RetailerListContext.Provider>
  );
}

export function useRetailers() {
  return useContext(RetailerListContext);
}

export function useApps() {
  return useContext(RetailerListContext).filter((r) => r.type === "app");
}
