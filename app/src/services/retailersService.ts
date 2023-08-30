import retailers from "./retailers";

export interface Retailer {
  retailerId: string;
  domain?: string;
  type?: "app" | "website";
  countryCode?: string;
  multistore?: boolean;
}

export async function fetchRetailers(): Promise<Retailer[]> {
  return retailers as Retailer[];
}
