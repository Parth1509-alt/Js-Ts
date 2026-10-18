function checkProductAvailability(availableStock, requestedQuantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (requestedQuantity <= availableStock) {
                resolve("Product is available.");
            } else {
                reject(new Error("Not enough product stock."));
            }
        }, 500);
    });
}

checkProductAvailability(10, 3)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

checkProductAvailability(2, 5)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));