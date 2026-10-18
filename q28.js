function calculateCheckoutTotal(...charges) {
    return charges.reduce((total, charge) => total + charge, 0);
}

const checkoutTotal = calculateCheckoutTotal(100, 50, 10, 5);
console.log("Total checkout amount:", checkoutTotal);





