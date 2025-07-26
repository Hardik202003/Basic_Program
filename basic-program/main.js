let num = parseInt(prompt("Enter the number :"))
let a = 0, b = 1;
let isFibonacci = false;

for (let i = 0; i <= num; i++) {
  if (a === num) {
    isFibonacci = true;
    break;
  }
  let next = a + b;
  a = b;
  b = next;
}

if (isFibonacci) {
  console.log(num + " is in the Fibonacci series.");
} else {
  console.log(num + " is NOT in the Fibonacci series.");
}


  let empfound = false;
console.log(employees);


