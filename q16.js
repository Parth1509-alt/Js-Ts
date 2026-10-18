let orderStatus = "Processing";
const transactionLog = [];

function checkout(orderAmount) {
    try {
        if (orderAmount <= 0) {
            throw new Error("Order amount must be greater than zero.");
        }

        orderStatus = "Completed";
        console.log("Checkout successful. Amount:", orderAmount);
    } catch (error) {
        orderStatus = "Failed";
        console.log("Checkout error:", error.message);
    } finally {
        transactionLog.push("Checkout finished with status: " + orderStatus);
        console.log("Transaction log:", transactionLog);
    }
}

checkout(100);
checkout(0);