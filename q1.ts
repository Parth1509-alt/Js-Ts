export const taxRate: number = 0.1;

export function calculateDiscount(price: number, discountPercentage: number): number {
	return price - (price * discountPercentage) / 100;
}

export class Product {
	constructor(public productName: string, public price: number) {}
}

export class ShoppingCart {
	private products: Product[] = [];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	getTotal(): number {
		return this.products.reduce((total, product) => total + product.price, 0);
	}
}

// Install TypeScript: npm install -g typescript
// Compile: tsc q1.ts q1_import.ts --module commonjs --target ES2017 --outDir dist
// Run: node dist/q1_import.js
