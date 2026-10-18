export {};

abstract class PaymentMethod {
    abstract processPayment(amount: number): void;
    abstract getPaymentDetails(): string;
}

class CreditCardPayment extends PaymentMethod {
    constructor(private cardNumber: string) {
        super();
    }

    processPayment(amount: number): void {
        console.log(`Paid $${amount} using a credit card.`);
    } 

    getPaymentDetails(): string {
        return `Credit card ending in ${this.cardNumber.slice(-4)}`;
    }
}

class UPIPayment extends PaymentMethod {
    constructor(private upiId: string) {
        super();
    }

    processPayment(amount: number): void {
        console.log(`Paid $${amount} using UPI.`);
    }

    getPaymentDetails(): string {
        return `UPI ID: ${this.upiId}`;
    }
}

const creditCard = new CreditCardPayment("1234567812345678");
creditCard.processPayment(50);
console.log(creditCard.getPaymentDetails());

const upi = new UPIPayment("customer@upi");
upi.processPayment(25);
console.log(upi.getPaymentDetails());