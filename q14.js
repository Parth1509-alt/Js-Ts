const availableStock = 5;

function purchaseProduct(requestedQuantity) {
    if (requestedQuantity > availableStock) {
        throw new Error("Insufficient product stock.");
    }

    return "Purchase successful.";
}

try {
    console.log(purchaseProduct(7));
} catch (error) {
    console.log("Purchase failed:", error.message);
}