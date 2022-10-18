let cart = [
   { item: "Bread", price: 3.29, quantiy: 2 },
   { item: "Milk", price: 4.09, quantiy: 1 },
   {item: "T-Bone Steak", price: 12.99, quantiy: 2},
   {item: "Baking Potato", price: 1.89, quantiy: 1},
   {item: "Iceberg Lettuce", price: 2.06, quantiy: 1},
   {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
   {item: "Apples", price: 0.66, quantity: 6},
];

function getItemName(object) {
    return object.item;
}

function displayName(ItemName) {
    console.log(itemName);
}

let itemNames = cart.map(getItemName);
itemName.forEach(displayName);

// sum cart
function addCartItem(currentTotal, CartItem) {
    return currentTotal + CartItem.price * CartItem.quantity;
}

const total = cart.reduce(addCartItem, 0);
console.log(total)