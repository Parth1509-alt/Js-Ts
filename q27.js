function calculateDeliveryCharge(deliveryFee = 50) {
    return deliveryFee;
}

console.log("Default delivery charge:", calculateDeliveryCharge());
console.log("Delivery charge provided:", calculateDeliveryCharge(30));