import { taxRate, calculateDiscount, Product, ShoppingCart } from "./q1";

const product = new Product("Notebook", 10);
const cart = new ShoppingCart();
cart.addProduct(product);

console.log("Tax rate:", taxRate);
console.log("Price after discount:", calculateDiscount(product.price, 10));
console.log("Shopping cart total:", cart.getTotal());