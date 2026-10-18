const taxRate = 0.1;

function calculateDiscount(price, discountPercentage) {
	return price - (price * discountPercentage) / 100;
}

class Product {
	constructor(productName, price) {
		this.productName = productName;
		this.price = price;
	}
}

class ShoppingCart {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	getTotal() {
		return this.products.reduce((total, product) => total + product.price, 0);
	}
}

module.exports = { taxRate, calculateDiscount, Product, ShoppingCart };
