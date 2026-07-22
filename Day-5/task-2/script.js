let cart = [
    { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
    { id: 2, name: 'Mouse', price: 50, quantity: 3 },
    { id: 3, name: 'Keyboard', price: 80, quantity: 2 },
    { id: 4, name: 'Monitor', price: 300, quantity: 1 }
];
let index = cart.findIndex(item => item.id === 3);
cart.splice(index, 1);
let expensive = cart.filter(item => item.price > 100);
let mouse = cart.find(item => item.name === 'Mouse');
let firstTwo = cart.slice(0, 2);

console.log('Updated cart:', cart);
console.log('Expensive items:', expensive);
console.log('Mouse:', mouse);
console.log('First two:', firstTwo);