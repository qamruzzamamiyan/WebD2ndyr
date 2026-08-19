console.log("\n====String Methods====");
let str="Hello World";
console.log("Uppercase: "+str.toUpperCase());
console.log("Lowercase: "+str.toLowerCase());
console.log("Character at index 3=",str.charAt(3));
console.log("Index of 'World': ",str.indexOf("World"));

let message="Hello World, Welcome to the World of JavaScript";
console.log("Last index of 'World': ",message.lastIndexOf("World"));

console.log("slice(6,11): ",message.slice(6,11));

let data="Html, Css, JavaScript, Python";
let languages=data.split(", ");
console.log("Languages: ",languages);

let text="I love JavaScript";
console.log(text.replace("JavaScript","Python"));

let firstName="Qamruzzama";
let lastName="Miyan";
console.log("Full Name: "+firstName.concat(" ",lastName));

console.log("===Includes Method===");
let sentence="I love JavaScript";
console.log(sentence.includes("JavaScript"));
console.log(sentence.includes("Python"));

console.log("\n===Array Object Methods===");
let numbers=[10,20,30,40,50];
console.log("Original Array: ",numbers);

console.log(numbers[0]);
console.log(numbers[3]);

numbers.push(60);
numbers.pop();
console.log("Array after pop: ",numbers);
numbers.shift();
console.log("Array after shift: ",numbers);
numbers.unshift(5);
console.log("Array after unshift: ",numbers);

let date= new Date();
console.log("Current Date and Time: ",date);
console.log("Current Year: ",date.getFullYear());
console.log("Current Month: ",date.getMonth()+1);
console.log("Current Date: ",date.getDate());
console.log("Current Day: ",date.getDay());
console.log("Current Hours: ",date.getHours());
console.log("Current Minutes: ",date.getMinutes());
console.log("Current Seconds: ",date.getSeconds());

console.log("\n===Math Object Methods===");
console.log("Value of PI: ",Math.PI);
console.log("Square root of 16: ",Math.sqrt(16));

console.log("min(10,20,30): ",Math.min(10,20,30));
console.log("max(10,20,30): ",Math.max(10,20,30));
console.log("Round of 4.7: ",Math.round(4.7));
console.log("floor of 4.7: ",Math.floor(4.7));
console.log("ceil of 4.3: ",Math.ceil(4.3));

console.log("square of 5: ",Math.pow(5,2));
console.log("square root of 25: ",Math.sqrt(25));
console.log("Random number between 0 and 1: ",Math.random());

