let students = [
    {
        id: 1,
        firstName: "Alice",
        lastName: "Johnson",
        age: 18,
        subjects: ["Math", "English", "Biology"]
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Smith",
        age: 19,
        subjects: ["History", "Math", "Geography"]
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Brown",
        age: 17,
        subjects: ["Physics", "Chemistry", "Math"]
    },
    {
        id: 4,
        firstName: "Diana",
        lastName: "White",
        age: 20,
        subjects: ["English", "Art", "History"]
    },
    {
        id: 5,
        firstName: "Ethan",
        lastName: "Taylor",
        age: 18,
        subjects: ["Math", "Computer Science", "Physics"]
    },
    {
        id: 6,
        firstName: "Fiona",
        lastName: "Green",
        age: 19,
        subjects: ["Biology", "Chemistry", "English"]
    },
    {
        id: 7,
        firstName: "George",
        lastName: "King",
        age: 18,
        subjects: ["Economics", "Math", "History"]
    },
    {
        id: 8,
        firstName: "Hannah",
        lastName: "Wright",
        age: 17,
        subjects: ["Math", "Physics", "Computer Science"]
    },
    {
        id: 9,
        firstName: "Isaac",
        lastName: "Lopez",
        age: 20,
        subjects: ["Geography", "History", "English"]
    },
    {
        id: 10,
        firstName: "Julia",
        lastName: "Martinez",
        age: 18,
        subjects: ["Chemistry", "Biology", "Art"]
    },
    {
        id: 11,
        firstName: "Kevin",
        lastName: "Roberts",
        age: 19,
        subjects: ["Math", "Economics", "Computer Science"]
    },
    {
        id: 12,
        firstName: "Laura",
        lastName: "Walker",
        age: 17,
        subjects: ["English", "Art", "Geography"]
    },
    {
        id: 13,
        firstName: "Michael",
        lastName: "Scott",
        age: 20,
        subjects: ["Physics", "Math", "Computer Science"]
    },
    {
        id: 14,
        firstName: "Nina",
        lastName: "dabd",
        age: 18,
        subjects: ["History", "English", "Art"]
    },
    {
        id: 15,
        firstName: "Oscar",
        lastName: "Evands",
        age: 19,
        subjects: ["Chemistry", "Biology", "Math"]
    },
    {
        id: 16,
        firstName: "ashcar",
        lastName: "Evand",
        age: 19,
        subjects: ["Chemistry", "Biology", "Math"]
    }
];

// all student first name start with "a"
// all student last name end with "d" 
// either first name contain "h" or last name contain "d" using only index of.


// const test = students.filter(student => student.firstName.startsWith('a'));

let result = students.filter(student => {
    return student.firstName.indexOf("a") == 0;
});
console.log(result);

let result1 = students.filter(student => {
    return student.lastName.lastIndexOf("d") == student.lastName.length -1 ;

});
console.log(result1);


let result2 = students.filter(student => {
    return (student.firstName.indexOf("h") >= 0 || student.lastName.indexOf("d") >= 0); 
    

});
console.log(result2);



// age > 18

let ages = students.filter(num => {
    return num.age > 18;
});

console.log(ages);

// student how have "math" subject

let mathsub = students.filter(num => {
    return num.subjects.includes("Math");
});

console.log(mathsub);

// either age greterthen 20 or subject greterthen 5 and fisrtname or lastname contain "e".

let name1 = students.filter(student => {
    return ((student.age > 20 || student.subjects.length > 5) && (student.firstName.includes("e") || student.lastName.includes("e")));
   
    
});

console.log(name1);



// let names2 = students.filter(names => {
//    if (names.firstName.includes("e") || names.lastName.includes("e")) 
//     return names.firstName;

// });
// console.log(names2);

