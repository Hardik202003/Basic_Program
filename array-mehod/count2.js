// Count of Number:- 
// Ex . =>    "7096707200" 
// count :-
// 7 -> count of 3
// 0 -> count of 4


let input = prompt("Enter a number:");
let count = {};
let input1 = parseInt(input)
for (let num of input1) {
  count[num] = (count[num] || 0) + 1;
}

console.log("Digit counts:");
for (let num in count) {
  console.log(num," count of ",count[num]);
}