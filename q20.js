const increaseProductPrices = function (products, percentage) {
    return products.map((product) => ({
        ...product,
        price: product.price + (product.price * percentage) / 100
    }));
};

const products = [
    { productName: "Notebook", price: 10 },
    { productName: "Pen", price: 2 }
];

console.log(increaseProductPrices(products, 10));