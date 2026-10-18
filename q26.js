async function displayProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=5");

        if (!response.ok) {
            throw new Error("Server returned status " + response.status);
        }

        const data = await response.json();
        console.log("Products:", data.products);
    } catch (error) {
        console.log("Could not fetch products:", error.message);
    }
}

displayProducts();