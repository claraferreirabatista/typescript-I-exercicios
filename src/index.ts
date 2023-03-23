import { getAllPurchasesFromUserId, createPurchase, queryProductsByName, createUser, getAllUsers, createProduct, getAllProducts, getProductById } from "./database";
import {ProductCategory} from "./types"

console.log(createUser("u003", "beltrano@email.com", "beltrano99"));
console.log(getAllUsers());

console.log(createProduct(
  "p004",
  "Monitor HD",
  800,
  ProductCategory.ELECTRONICS));
console.log(getAllProducts());
console.log(getProductById("p004"));
console.log(getAllPurchasesFromUserId("2"))
console.log(createPurchase("u3", "8", 2, 1600))
console.log(queryProductsByName("3"))
