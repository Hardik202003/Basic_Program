// Calculate the sum,mulipication,substraction and division of elements in an array.

let arr = [2, 3, 4, 5];

// function arithmatic(arr) {
//     let sum = arr.reduce((acc, val) => acc + val);

//     let multiplication = arr.reduce((acc, val) => acc * val);

//     let subtraction = arr.reduce((acc, val) => acc - val);
    
//     let division = arr.reduce((acc, val) => acc / val);
  
//     return { sum, multiplication, subtraction, division };
//   }
  
//   console.log(arithmatic(arr));


let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    
}
console.log(sum);


let division =  arr[0];

for (let i = 1; i < arr.length; i ++){
   division = division / arr[i];
}
    

console.log(division);


let multiplication = 1;

for (let i = 0; i < arr.length; i ++){
    multiplication *= arr[i];
    
}
console.log(multiplication);


let subtraction = arr[0];

for (let i = 1; i < arr.length; i ++ ){
    subtraction = subtraction - arr[i] ;
    
}
console.log(subtraction);


































