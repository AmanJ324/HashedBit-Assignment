// 1. Declaring variables with let, const, and var
function variableScope() {
    {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; 
    const c = "I am const"; // Block-scoped & immutable
    console.log(a, b, c);
    }
    console.log("outside the block");
    console.log(a);
    // console.log(b);  // Block-scoped show error
    // console.log(c);  //also show error
}
variableScope();



// 2. Function to return the second fruit from an array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getFruit(arr) {
    return arr[1]; 
}

console.log(getFruit(fruits)); // Outputs: "Banana"



// 3. Function to modify an array using push() and pop()
function newArray(arr) {
    arr.push(20);
    arr.pop();
    return arr;
}
let arr = [1, 2, 3];
let result = newArray(arr);
console.log("new Array is:", result);


// 4. Function to return an array of squared numbers using map()
const numbers = [2, 3, 4, 5];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); // Outputs: [4, 9, 16, 25]


// 5. Function to filter out even numbers using filter()
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6,7])); // Outputs: [1, 3, 5,7]


// 6. Function to log a greeting message using an object
const person = { name: "John", age: 30, occupation: "Developer" };
function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}
greetPerson(person); 


// 7. Function to calculate rectangle area
function Area(rect) {
    return rect.width * rect.height;
}
console.log(Area({ width: 10, height: 4 })); // Outputs: 40



// 8. Function to return object keys using Object.keys()
const sampleObject = {
    name: "Aman",
    age: 20,
    rollno: 3 
};
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys(sampleObject));   // Output: [ 'name', 'age', 'rollno' ]


// 9. Function to merge two objects using Object.assign()
function merge(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(merge({ name: "Aman" }, { age: 21 }));  



// 10. Function to calculate sum using reduce()
const numArray = [10, 20, 30, 40, 50];
function calculateSum(arr) {
    return arr.reduce((sum, n) => sum + n, 0);
}
console.log(calculateSum(numArray));