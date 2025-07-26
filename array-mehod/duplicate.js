 // Remove Duplicate No. of Array

 let array = [1, 3, 23, 32, 12, 1, 54, 1, 3, 32, "h", "a", "h"];

 let value = [];

 for (let i = 0; i < array.length; i++) {
     if (!value.includes(array[i])) {
         value.push(array[i]);
     }  
 }

 console.log(value); 