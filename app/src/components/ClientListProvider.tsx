import React, { createContext, useContext, useState } from "react";
import { Client, fetchClients } from "../services/clientsService";
import { useEffect } from "react";

const ClientListContext = createContext<Client[]>([]);

export function ClientListProvider({ children }: { children: React.ReactElement }) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchClients().then((r) => setClients(r));
  }, []);

  return (
    <ClientListContext.Provider value={clients}>
      {children}
    </ClientListContext.Provider>
  );
}

export function useClients() {
  return useContext(ClientListContext);
}
