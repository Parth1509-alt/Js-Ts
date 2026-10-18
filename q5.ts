export {};

function getProductInfo<T>(info: T): T {
    return info;
}

const productName = getProductInfo<string>("Notebook");
const productDetails = getProductInfo({ productId: 1, price: 10 });

console.log(productName);
console.log(productDetails);