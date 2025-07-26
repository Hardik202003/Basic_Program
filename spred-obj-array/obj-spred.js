let warehouseA = ["apple", "banana", "cherry", "date"];
let warehouseB = ["elderberry", "fig", "grape", "apple", "banana"];
 


// Merge the two arrays into a new array called allProducts, using the spread operator.
let allProducts = [...warehouseA , ...warehouseB];

console.log(allProducts);

// Remove duplicates from allProducts. using the spread operator.

let s  = new Set([ ...allProducts] );

console.log(s); 
// Use array destructuring with the rest operator to 
// Assign the first 2 unique products to variables first and second 
// Collect the remaining products into a variable called others

 let names = allProducts; 

 let [first, second, ...others] = names;

 console.log(first,"\n",second, "\n",others);