class Product {
    constructor(productId, productName, price, category) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.category = category;
    }
}

const product = new Product(1, "Notebook", 10, "Stationery");
console.log(product);