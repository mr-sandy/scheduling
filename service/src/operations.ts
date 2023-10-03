import { Operation } from "../../common/types";

let id = 1;
export const clients = [
  {
    id: "marswholesale-uk",
    searchTerms: ["snickers", "mars", "twix"],
    categories: ["Chocolate", "Candy", "Sweets", "Snacks", "Bars"],
    retailers: ["Tesco", "Sainsburys", "Asda", "Morrisons"],
    productIds: [
      "123",
      "456",
      "789",
      "012",
      "345",
      "678",
      "901",
      "234",
      "567",
      "890",
    ],
  },
  {
    id: "cocacola-retail-uk",
    searchTerms: [
      "coke",
      "diet coke",
      "coke zero",
      "fanta",
      "sprite",
      "dr pepper",
    ],
    categories: ["Soft Drinks", "Soda", "Fizzy Drinks", "Pop", "Cola", "Coke"],
    retailers: ["Tesco", "Sainsburys", "Asda", "Morrisons"],
    productIds: ["121251", "567889", "789123", "123456", "456789", "789123"],
  },
  {
    id: "arla-uk",
    searchTerms: ["milk", "cheese", "butter", "yoghurt", "cream", "dairy"],
    categories: ["Dairy", "Cheese", "Milk", "Yoghurt", "Cream", "Butter"],
    retailers: [
      "Tesco",
      "Sainsburys",
      "Asda",
      "Morrisons",
      "Waitrose",
      "Ocado",
    ],
    productIds: [
      "56789",
      "12345",
      "67890",
      "09876",
      "54321",
      "09876",
      "54321",
      "12345",
      "67890",
    ],
  },
];

interface ClientConfig {
  id: any;
  searchTerms: any;
  categories: any;
  retailers: any;
  productIds: any;
}

export function generateOperations(client: ClientConfig): Operation[] {
  const ops: Operation[] = [];
  client.retailers.forEach((retailer: string) => {
    client.searchTerms.forEach((searchTerm: string) => {
      ops.push({
        id: (id++).toString(),
        operationType: "search",
        client: client.id,
        retailer: retailer,
        schedule: "daily",
        searchTerm: searchTerm,
      });
    });

    client.categories.forEach((category: string) => {
      ops.push({
        id: (id++).toString(),
        operationType: "category",
        client: client.id,
        retailer: retailer,
        schedule: "daily",
        category: category,
      });
    });

    client.productIds.forEach((productId: string) => {
      ops.push({
        id: (id++).toString(),
        operationType: "detail",
        client: client.id,
        retailer: retailer,
        schedule: "daily",
        productId: productId,
      });
    });
  });

  return ops;
}

export const operations: Operation[] = clients.flatMap((client) => {
  return generateOperations(client);
});
