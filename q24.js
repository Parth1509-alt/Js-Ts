const productNames = ["Notebook", "Pen", "Backpack"];
const [firstProduct, secondProduct] = productNames;

const customer = {
    name: "Asha Patel",
    email: "asha@example.com"
};
const { name, email } = customer;

const shippingAddress = {
    street: "12 Market Road",
    city: "Springfield",
    postalCode: "12345"
};
const { street, city, postalCode } = shippingAddress;

console.log("Product names:", firstProduct, secondProduct);
console.log("Customer:", name, email);
console.log("Shipping address:", street, city, postalCode);