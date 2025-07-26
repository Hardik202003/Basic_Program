// Find the Intersection of Two Arrays
// Problem: Write a function that returns the intersection of two arrays (i.e., the elements that appear in both arrays).
 
let array1: number[] = [1, 2, 3, 4, 5];
let array2: number[] = [4, 5, 6, 7, 1];

// function intersection(arr1: number[], arr2: number[]): number[] {
//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);
//   let result: number[] = [];

//   for(let num of set2){
//     if(!set1 in set1){
//   }
// }

function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<boolean>(true); 
console.log(result1)

let map = new Map<object,number>();