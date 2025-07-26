
// Write a function that checks if a number is a Fibonacci number 

function Fibonacci(num: number, num1: number = 0, num2: number = 1,  series : number[] = []): Number[] {


    if (num1 > num ) {
        return series;
        }

   series.push(num1);

    return Fibonacci(num, num2, num1 + num2, series);
     
}

console.log(Fibonacci(10));  











