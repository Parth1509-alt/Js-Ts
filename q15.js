function requestProductFromServer() {
    throw new Error("Server error while fetching product details.");
}

function getProductDetails() {
    return requestProductFromServer();
}

try {
    const product = getProductDetails();
    console.log(product);
} catch (error) {
    console.log("Could not get product details:", error.message);
}