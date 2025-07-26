// Write a function that checks if a number is a Fibonacci number 

function fibonacci(num: number, num1: number = 0, num2: number = 1): boolean {

    if (num === num1 || num === num2) {
        return true;
    }
    if (num1 + num2 > num) {
        return false;
    }
    return fibonacci(num, num2, num1 + num2);
}

console.log(fibonacci(5));  

