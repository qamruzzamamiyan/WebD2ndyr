let arr=[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("The sum of the array elements is: "+sum);
let student=[
    ["Qamruzzama Miyan", 2503215300145, "CSE", "AIML"],
    ["John Doe", 2503215300146, "CSE", "AIML"],
    ["Jane Smith", 2503215300147, "CSE", "AIML"]
]
console.log("Student Details:");
for(let i=0;i<student.length;i++){
    console.log("Name: "+student[i][0]);
    console.log("ID: "+student[i][1]);
    console.log("Branch: "+student[i][2]); 
    console.log("Department: "+student[i][3]);
}
const std ={
    name: "Qamruzzama Miyan",
    id: 2503215300145,
    branch: "CSE",
    department: "AIML"
}
console.log(std);
console.log(std.name);
std.year='2nd Year';
delete std.department;
console.log(std);

const users=[
    {name: "Qamruzzama Miyan", id: 2503215300145, branch: "CSE", department: "AIML"},
    {name: "John Doe", id: 2503215300146, branch: "CSE", department: "AIML"},
    {name: "Jane Smith", id: 2503215300147, branch: "CSE", department: "AIML"}
]
console.log(users);
const employee ={
    name: "Qamruzzama Miyan",
    id: 2503215300145,
    branch: "CSE",
    department: "AIML",
    display: function(){
        console.log("Name: "+this.name);
        console.log("ID: "+this.id);
        console.log("Branch: "+this.branch);
        console.log("Department: "+this.department);
    }
}
employee.display();

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
