export interface Operation {
  id: string;
  client: string;
  retailer: string;
  operationType: string;
  schedule: string;
  multistore?: boolean;
  searchTerm?: string;
  category?: string;
  productId?: string;
}
