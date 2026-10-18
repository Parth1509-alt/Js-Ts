class InvalidProductException extends Error {
    constructor(productId) {
        super("Product ID " + productId + " is invalid.");
        this.name = "InvalidProductException";
    }
}

const products = [
    { productId: 1, productName: "Notebook" },
    { productId: 2, productName: "Pen" }
];

function findProduct(productId) {
    const product = products.find((item) => item.productId === productId);

    if (!product) {
        throw new InvalidProductException(productId);
    }

    return product;
}

try {
    console.log(findProduct(5));
} catch (error) {
    if (error instanceof InvalidProductException) {
        console.log(error.name + ": " + error.message);
    } else {
        throw error;
    }
}