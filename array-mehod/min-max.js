// Find both the minimum and maximum values in an array.

let numbers = [29, 41, 24, 76, 13, 43, 55, 34, 67];

// function both(arr){

// let max = Math.max(...arr);
// console.log("maximum number is :", max);

// let min = Math.min(...arr);
// console.log("minimum number is :",min);
// }

// both(arr);


let Maximum = numbers[0];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > Maximum) {
        Maximum = numbers[i];
    }
}


let minimum = numbers[0];
for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] < minimum) {
        minimum = numbers[i];
    }
}

console.log("maximum number is :", Maximum ,"\nminimum number is :", minimum);





     