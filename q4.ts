
export {};

interface DiscountService {
    applyDiscount(price: number): number;
}

class PremiumDiscount implements DiscountService {
    constructor(private discountPercentage: number = 20) {}

    applyDiscount(price: number): number {
        return price - (price * this.discountPercentage) / 100;
    }
}

const premiumDiscount = new PremiumDiscount();
console.log("Price after premium discount:", premiumDiscount.applyDiscount(100));