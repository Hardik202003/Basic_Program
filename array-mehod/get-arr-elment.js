// Get Array From N Postion.

let arr = [29, 41, 24, 76, 13, 43, 55, 34, 67];

let user = prompt("Enter the value :");

if (user >= 0 && user < arr.length) {
    console.log(arr[user]);
} else {
    console.log("Invalid number!");
}