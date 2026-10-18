const calculateDiscount = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
};

console.log("Final price:", calculateDiscount(100, 15));