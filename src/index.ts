import { getAllPurchasesFromUserId, createPurchase, queryProductsByName, createUser, getAllUsers, createProduct, getAllProducts, getProductById } from "./database";
import { ProductCategory } from "./types"

console.log(createUser("u3", "beltrano@email.com", "beltrano99"));
console.log(getAllUsers());

 console.log(createProduct(
  "8",
  "Monitor HD", 1000,
  ProductCategory.ELECTRONICS));
console.log(getProductById("8"))
console.log(createPurchase("u2", "4", 25, 750))
console.log(getAllPurchasesFromUserId("u2"))
console.log(getAllProducts());
console.log(queryProductsByName("Camiseta"))
