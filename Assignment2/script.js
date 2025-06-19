// 1. Display even numbers from 1 to 100
for(let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 2. Function to perform basic  operations(add, subtract, multiply and divide two numbers). Use switch inside function.
function calculate(num1, num2, operation) {
    switch(operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Invalid operation,try again';
    }
}

// 3. Function to calculate tax based on salary
function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.1;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.2;
        case (salary > 1500000):
            return salary * 0.3;
        default:
            return 'Invalid salary amount';
    }
}

// 4. Function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;
    
    for(let i = 0; i < str1.length; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }
    
    return sum;
}

console.log("");
console.log(calculate(10, 5, 'multiply')); 
console.log(findTax(1200000)); 
console.log(sumOfProducts(6, 34)); 