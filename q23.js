function findHighestValueOrder(orders) {
    if (orders.length === 0) {
        return null;
    }

    return orders.reduce((highestOrder, order) =>
        order.totalAmount > highestOrder.totalAmount ? order : highestOrder
    );
}

const orders = [
    { orderId: 101, customerName: "Asha", totalAmount: 75 },
    { orderId: 102, customerName: "Liam", totalAmount: 120 },
    { orderId: 103, customerName: "Mia", totalAmount: 95 }
];

console.log("Highest-value order:", findHighestValueOrder(orders));