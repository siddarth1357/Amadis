const name = "John";
const age = 25;
const city = "NYC";
const message = `Hello ${name}! You are ${age} years old from ${city}.`;
console.log(message);
const longText = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log(longText);
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); 
console.log(`Is ${a} > ${b}? ${a > b ? 'Yes' : 'No'}`); 
const user = { name: "John", age: 25 };
const html = `
    <div>
        <h1>${user.name}</h1>
        <p>Age: ${user.age}</p>
    </div>
`;
console.log(html);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); 
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); 
const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4, 5];
console.log(newNumbers); 
const nums = [1, 2, 3, 4, 5];
console.log(Math.max(...nums)); 
console.log(Math.min(...nums)); 
const letters = [..."hello"];
console.log(letters); 