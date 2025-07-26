let array : number[] = [1,3,4,5,6,7]

//  Find the Missing Number in an Array
// Problem: Write a function that takes an array of numbers from 1 to n with one number missing and returns the missing number.
 function missingNum(arr: number[]): number {
  let n = Math.max(...arr);
  let numSet = new Set(arr);

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
  return 0; 
}

console.log(missingNum(array)); 


// Sum of Digits
// Problem: Write a function that takes a number and returns the sum of its digits.
 
function returnDigit(nums: number[]): number {
    return nums.reduce((a, b) => a + b)
}

 console.log(returnDigit(array));


