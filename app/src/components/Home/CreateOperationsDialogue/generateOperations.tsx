import { Operation } from "../../../../../common/types";

export function generateOperations(
  client: string,
  retailer: string,
  operationType: string,
  schedule: string,
  searchTerms: string[] = [],
  categories: string[] = [],
  productIds: string[] = [],
  multistore: boolean
): Operation[] {
  switch (operationType) {
    case "search":
      return searchTerms.map((searchTerm) => ({
        client,
        retailer,
        operationType,
        schedule,
        searchTerm,
        multistore,
      })) as Operation[];

    case "category":
      return categories.map((category) => ({
        client,
        retailer,
        operationType,
        schedule,
        category,
        multistore,
      })) as Operation[];

    case "detail":
      return productIds.map((productId) => ({
        client,
        retailer,
        operationType,
        schedule,
        productId,
        multistore,
      })) as Operation[];

    default:
      return [] as Operation[];
  }
}
