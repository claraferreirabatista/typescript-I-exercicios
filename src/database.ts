import { User, Product, ProductCategory, Purchase } from "./types"

let users: User[] = [
  {
    id: "u1",
    email: "fulano@email.com",
    password: "fulano123"
  },

  {
    id: "u2",
    email: "ciclano@gmail.com",
    password: "ciclano456"
  }
];

let products: Product[] = [
  {
    id: "1",
    name: "Fone de ouvido",
    price: 100,
    category: ProductCategory.ELECTRONICS
  },
  {
    id: "2",
    name: "Bolsa",
    price: 50,
    category: ProductCategory.ACCESSORIES
  },
  {
    id: "3",
    name: "Camisa",
    price: 80,
    category: ProductCategory.CLOTHES_AND_SHOES
  },
  {
    id: "4",
    name: "Camiseta",
    price: 30,
    category: ProductCategory.CLOTHES_AND_SHOES
  },

  {
    id: "6",
    name: "Boné",
    price: 20,
    category: ProductCategory.ACCESSORIES
  },

  {
    id: "7",
    name: "Notebook",
    price: 2000,
    category: ProductCategory.ELECTRONICS
  }
];

function createUser(id: string, email: string, password: string): string {
  const newUser: User = { id, email, password };
  users.push(newUser);
  return "Cadastro realizado com sucesso";
}

function getAllUsers(): User[] {
  return users;
}

function createProduct(id: string, name: string, price: number, category: ProductCategory): string {
  const newProduct: Product = { id, name, price, category };
  products.push(newProduct);
  return "Produto criado com sucesso";
}

function getAllProducts(): Product[] {
  return products;
}

function getProductById(idToSearch: string): Product | undefined {
  const productFound = products.find(product => product.id === idToSearch);
  return productFound;
}
const store: {
  products: Product[];
  purchases: Purchase[];
} = {
  products: products,
  purchases:[],
};

function queryProductsByName(q: string): Product[] {

  const filteredProducts = store.products.filter(
    (product) =>
      product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  return filteredProducts;
}

function createPurchase(
  userId: string,
  productId: string,
  quantity: number,
  totalPrice: number
): string {
  const newPurchase: Purchase = {
    userId,
    productId,
    quantity,
    totalPrice,
  };
  store.purchases.push(newPurchase);
  return "Compra realizada com sucesso";
}

function getAllPurchasesFromUserId(userIdToSearch: string): Purchase[] {
  const filteredPurchases = store.purchases.filter(
    (purchase) => purchase.userId === userIdToSearch
  );
  return filteredPurchases;
}

export { getAllPurchasesFromUserId, createPurchase, queryProductsByName, createUser, getAllUsers, createProduct, getAllProducts, getProductById }
