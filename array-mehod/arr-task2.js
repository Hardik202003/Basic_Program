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
        age: 17,
        subjects: ["History", "Math", "Geography"]
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Brown",
        age: 10,
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
        age: 15,
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
        age: 21,
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
        age: 24,
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
        age: 28,
        subjects: ["Chemistry", "Biology", "Math"]
    }
];
  

// creat array of full name

let fullNames = students.map(student => {
    return student.firstName +" "+ student.lastName});

// add "isAdult" field

let isadult = students.map(student => ({
    ...student, isadult :  student.age >= 18,
    
 }));

console.log(isadult);





// Create an array of students full names who have age > 20


let names = students.filter(student => student.age >  20)
   .map(studen => `${studen.firstName} ${studen.lastName}`);
    
    console.log(names);     

    // Convert to CSV-like Rows["ID, Full Name, Age"]

    let CSV = students
    .map(student => `${student.id}, ${student.firstName} ${student.lastName}, ${student.age}`);

    console.log(CSV);

    // 