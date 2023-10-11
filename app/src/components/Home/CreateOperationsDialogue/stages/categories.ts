export interface Category {
  name: string;
  children?: Category[];
}

export const allCategories: Category[] = [
  {
    name: "fresh produce",
    children: [
      {
        name: "organic",
        children: [
          {
            name: "fruits",
            children: [
              { name: "berries" },
              { name: "apples" },
              { name: "bananas" },
              { name: "avocados" },
            ],
          },
          {
            name: "vegetables",
            children: [
              { name: "kale" },
              { name: "spinach" },
              { name: "carrots" },
              { name: "broccoli" },
            ],
          },
        ],
      },
      {
        name: "conventional",
        children: [
          {
            name: "fruits",
            children: [
              { name: "melons" },
              { name: "oranges" },
              { name: "kiwi" },
            ],
          },
          {
            name: "vegetables",
            children: [
              { name: "lettuce" },
              { name: "bell peppers" },
              { name: "zucchini" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "dairy and alternatives",
    children: [
      {
        name: "milk products",
        children: [
          { name: "cow's milk" },
          { name: "yogurt" },
          { name: "cheese" },
          { name: "butter" },
        ],
      },
      {
        name: "plant based",
        children: [
          { name: "almond milk" },
          { name: "soy yogurt" },
          { name: "cashew cheese" },
        ],
      },
    ],
  },
  {
    name: "bakery and breakfast",
    children: [
      {
        name: "bread",
        children: [
          { name: "whole grain" },
          { name: "gluten-free" },
          { name: "sourdough" },
        ],
      },
      {
        name: "cereals",
        children: [
          { name: "cornflakes" },
          { name: "oatmeal" },
          { name: "muesli" },
        ],
      },
      {
        name: "pastries",
        children: [
          { name: "croissants" },
          { name: "muffins" },
          { name: "bagels" },
        ],
      },
    ],
  },
  {
    name: "meats and seafood",
    children: [
      {
        name: "poultry",
        children: [
          { name: "chicken breasts" },
          { name: "turkey slices" },
          { name: "duck" },
        ],
      },
      {
        name: "red meat",
        children: [
          { name: "beef steak" },
          { name: "lamb chops" },
          { name: "pork ribs" },
        ],
      },
      {
        name: "seafood",
        children: [
          { name: "shrimp" },
          { name: "salmon fillets" },
          { name: "lobster" },
        ],
      },
    ],
  },
  {
    name: "frozen goods",
    children: [
      {
        name: "meals",
        children: [
          { name: "vegetarian lasagna" },
          { name: "chicken curry" },
          { name: "beef stir fry" },
        ],
      },
      {
        name: "desserts",
        children: [
          { name: "ice cream" },
          { name: "frozen yogurt" },
          { name: "gelato" },
        ],
      },
      {
        name: "vegetables",
        children: [
          { name: "broccoli florets" },
          { name: "stir-fry mix" },
          { name: "peas" },
        ],
      },
    ],
  },
  {
    name: "pantry",
    children: [
      {
        name: "canned goods",
        children: [{ name: "beans" }, { name: "tomatoes" }, { name: "soup" }],
      },
      {
        name: "spices and seasonings",
        children: [
          { name: "black pepper" },
          { name: "basil" },
          { name: "curry powder" },
        ],
      },
      {
        name: "snacks",
        children: [
          { name: "potato chips" },
          { name: "chocolate bars" },
          { name: "nuts" },
        ],
      },
    ],
  },
  {
    name: "beverages",
    children: [
      {
        name: "alcoholic",
        children: [
          { name: "craft beer" },
          { name: "red wine" },
          { name: "whiskey" },
        ],
      },
      {
        name: "non alcoholic",
        children: [
          { name: "sparkling water" },
          { name: "green tea" },
          { name: "fruit juices" },
        ],
      },
      {
        name: "coffees and teas",
        children: [
          { name: "espresso beans" },
          { name: "green tea" },
          { name: "chamomile tea" },
        ],
      },
    ],
  },
  {
    name: "health and wellness",
    children: [
      {
        name: "supplements",
        children: [
          { name: "vitamin C" },
          { name: "protein powder" },
          { name: "omega-3" },
        ],
      },
      {
        name: "organic and natural",
        children: [
          { name: "essential oils" },
          { name: "herbal tea" },
          { name: "whole grain snacks" },
        ],
      },
    ],
  },
  {
    name: "household and cleaning",
    children: [
      {
        name: "cleaners",
        children: [
          { name: "surface spray" },
          { name: "dish soap" },
          { name: "laundry detergent" },
        ],
      },
      {
        name: "tools and supplies",
        children: [
          { name: "mops" },
          { name: "scrub brushes" },
          { name: "dusters" },
        ],
      },
    ],
  },
  {
    name: "pet supplies",
    children: [
      {
        name: "dogs",
        children: [{ name: "dog food" }, { name: "toys" }, { name: "leashes" }],
      },
      {
        name: "cats",
        children: [
          { name: "cat litter" },
          { name: "scratch posts" },
          { name: "treats" },
        ],
      },
      {
        name: "others",
        children: [
          { name: "bird seeds" },
          { name: "fish food" },
          { name: "hamster wheels" },
        ],
      },
    ],
  },
  {
    name: "gourmet foods",
    children: [
      {
        name: "international",
        children: [
          {
            name: "italian",
            children: [{ name: "pasta" }, { name: "risotto" }],
          },
          {
            name: "asian",
            children: [{ name: "sushi wraps" }, { name: "rice noodles" }],
          },
          {
            name: "mexican",
            children: [{ name: "tortillas" }, { name: "salsa" }],
          },
        ],
      },
      {
        name: "specialty cheeses",
        children: [
          { name: "brie" },
          { name: "gouda" },
          { name: "blue cheese" },
        ],
      },
      {
        name: "organic snacks",
        children: [
          { name: "dried fruits" },
          { name: "almonds" },
          { name: "organic chips" },
        ],
      },
    ],
  },
  {
    name: "gardening supplies",
    children: [
      {
        name: "plants",
        children: [
          { name: "indoor plants" },
          { name: "outdoor plants" },
          { name: "herbs" },
        ],
      },
      {
        name: "gardening tools",
        children: [
          { name: "rakes" },
          { name: "shovels" },
          { name: "gardening gloves" },
        ],
      },
      {
        name: "soil and fertilizers",
        children: [
          { name: "organic soil" },
          { name: "plant food" },
          { name: "mulch" },
        ],
      },
    ],
  },
  {
    name: "personal care",
    children: [
      {
        name: "skincare",
        children: [
          { name: "moisturizers" },
          { name: "cleansers" },
          { name: "sunscreen" },
        ],
      },
      {
        name: "haircare",
        children: [
          { name: "shampoos" },
          { name: "conditioners" },
          { name: "hair gels" },
        ],
      },
      {
        name: "oral care",
        children: [
          { name: "toothpaste" },
          { name: "toothbrushes" },
          { name: "mouthwash" },
        ],
      },
    ],
  },
];
