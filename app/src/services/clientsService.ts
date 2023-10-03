import clients from "./clients";

export interface Client {
  clientId: string;
}

export async function fetchClients(): Promise<Client[]> {
  return clients as Client[];
}
