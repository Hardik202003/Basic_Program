// Count of Character :- 
// Ex . =>    "Ahemdabad" 
// count :-
// A -> count of 3
// H -> count of 1


let user = prompt("Enter the character :");

let count = {};

for (let char of user.toLowerCase()) {

   count[char] = (count [char] || 0) + 1;

    
}

for (let key in count) {
    console.log(key," count of ", count[key]);
}
 


