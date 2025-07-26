interface studentDetail {
    FirstName: string,
    LastName: string,
    Age: number,
    Department: string,
    Subjects: string[]
}

let students: studentDetail[] = [
    {
        FirstName: "Alice",
        LastName: "Johnson",
        Age: 20,
        Department: "Computer Science",
        Subjects: ["Algorithms", "Data Structures", "AI"]
    },
    {
        FirstName: "Bob",
        LastName: "Smith",
        Age: 22,
        Department: "Mathematics",
        Subjects: ["Calculus", "Linear Algebra", "Statistics"]
    },
    {
        FirstName: "Charlie",
        LastName: "Brown",
        Age: 21,
        Department: "Physics",
        Subjects: ["Quantum Mechanics", "Electromagnetism", "Thermodynamics"]
    },
    {
        FirstName: "Diana",
        LastName: "Prince",
        Age: 23,
        Department: "History",
        Subjects: ["Ancient History", "Modern History", "Archaeology"]
    },
    {
        FirstName: "Ethan",
        LastName: "Hunt",
        Age: 20,
        Department: "Mechanical Engineering",
        Subjects: ["Thermodynamics", "Fluid Mechanics", "Machine Design"]
    },
    {
        FirstName: "Fiona",
        LastName: "Gallagher",
        Age: 19,
        Department: "Psychology",
        Subjects: ["Cognitive Science", "Behavioral Psychology", "Statistics"]
    },
    {
        FirstName: "George",
        LastName: "Lopez",
        Age: 24,
        Department: "Electrical Engineering",
        Subjects: ["Circuits", "Signals", "Microcontrollers"]
    },
    {
        FirstName: "Hannah",
        LastName: "Baker",
        Age: 21,
        Department: "Literature",
        Subjects: ["Poetry", "Modern Novels", "Literary Theory"]
    },
    {
        FirstName: "Ian",
        LastName: "Wright",
        Age: 22,
        Department: "Business Administration",
        Subjects: ["Marketing", "Finance", "Economics"]
    },
    {
        FirstName: "Jane",
        LastName: "Doe",
        Age: 20,
        Department: "Biology",
        Subjects: ["Genetics", "Microbiology", "math"]
    },
    {
        FirstName: "Kevin",
        LastName: "Hart",
        Age: 23,
        Department: "Theater Arts",
        Subjects: ["Drama", "Stagecraft", "Directing"]
    },
    {
        FirstName: "Laura",
        LastName: "Hill",
        Age: 22,
        Department: "Chemistry",
        Subjects: ["Organic Chemistry", "Analytical Chemistry", "Biochemistry"]
    },
    {
        FirstName: "Michael",
        LastName: "Scott",
        Age: 25,
        Department: "Management",
        Subjects: ["Organizational Behavior", "Strategy", "Leadership"]
    },
    {
        FirstName: "Nina",
        LastName: "Williams",
        Age: 67,
        Department: "Law",
        Subjects: ["Criminal Law", "Contract Law", "International Law"]
    },
    {
        FirstName: "Oscar",
        LastName: "Martinez",
        Age: 23,
        Department: "Accounting",
        Subjects: ["Taxation", "Financial Reporting", "Auditing"]
    },
    {
        FirstName: "Pam",
        LastName: "Beesly",
        Age: 20,
        Department: "it",
        Subjects: ["Painting", "Sculpture", "Art History"]
    },
    {
        FirstName: "Quinn",
        LastName: "Foster",
        Age: 24,
        Department: "it",
        Subjects: ["Ethics", "Epistemology", "math"]
    },
    {
        FirstName: "Rachel",
        LastName: "Green",
        Age: 22,
        Department: "Fashion Design",
        Subjects: ["Textile Design", "Fashion Marketing", "Styling"]
    },
    {
        FirstName: "Steve",
        LastName: "Rogers",
        Age: 26,
        Department: "Sociology",
        Subjects: ["International Relations", "math", "Public Policy"]
    },
    {
        FirstName: "Mina",
        LastName: "Chen",
        Age: 21,
        Department: "Sociology",
        Subjects: ["Social Research", "Cultural Studies", "Urban Sociology"]
    }
];


class student {

    FirstName!: string;
    LastName!: string;
    Age!: number;
    Department!: string;
    Subjects!: string[];

    // find student f-name is start with "m" but only first matching

    startWithM(): studentDetail | undefined {
        return students
            .find(student => student.FirstName.startsWith("M"))

    }

    // get all student whose age is greter then 20.

    ageGreterthen20(): studentDetail[] {
        return students.filter(
            students => students.Age > 20)

    }

    //  get all student belong to "it" department

    getIt(): studentDetail[] {
        return students.filter(
            students => { return students.Department == "it" }
        )
    }

    // get full name of all student

    getName(): string[] {
        return students.map(student => {
            return student.FirstName + " " + student.LastName
        })
    }

    //  if age is less then 18 :- minnor
    //  if age is between 18 to 60 :- adult
    //  if age is greter then 60 :- senior citizen

    infoStudent(): string[] {
        return students.map(
            student => {
                if (student.Age < 18) {
                    return `${student.FirstName} is Minoor`;
                } else if (student.Age >= 18 && student.Age < 60) {
                    return `${student.FirstName} is Adult`
                } else {
                    return `${student.FirstName} is senior citizen`
                }
            }
        )
    }

    // ex ("firstname" is working on "department name")

    departmentInfo(): string[] {
        return students.map(
            student => {
                return `${student.FirstName} is working on ${student.Department}`
            }
        )
    }

    //  all student name and subject array 
    studentInfo(): { name: string, subjects: string[] }[] {
        return students.map(student => ({
            name: student.FirstName,
            subjects: student.Subjects
        }));
    }


    //only it department get return { name: string, subjects: string[] }[]
    department(): { name: string, subjects: string[] }[] {
        return students
            .filter(student => student.Department === 'it')
            .map(student => ({
                name: student.FirstName,
                subjects: student.Subjects
            }));
    }


    //  student list subject as math

    studentList(): string[] {
        return students.filter(student => student.Subjects.includes("math"))
            .map(student => student.FirstName)
    }

    // student list with eithen subject math or department "it" And age greter 25

    subjectMath(): string[] {
        return students
            .filter(student =>
                (student.Subjects.includes("math") || student.Department === "it") && student.Age > 25)
            .map(student => student.FirstName);
    }

    // Get list of all unique subjects

    getSubject(): string[] {
        let allSubjects: string[] = [];

        for (let i = 0; i < students.length; i++) {
            let subjects = students[i].Subjects;
            for (let j = 0; j < subjects.length; j++) {
                if (!allSubjects.includes(subjects[j]))
                    allSubjects.push(subjects[j]);
            }
        }

        return allSubjects;
    }


    // Group students by department:
    // Department Name: 
    // Student Count:

    groupDepartment(): { Department: string, Count: number }[] {
        let result: { Department: string, Count: number }[] = [];
        for (let i = 0; i < students.length; i++) {
            let dept = students[i].Department;
            let found = false;
            for (let j = 0; j < result.length; j++) {
                if (result[j].Department === dept) {
                    result[j].Count++;
                    break;
                }
            }
            if (!found) {
                result.push({ Department: dept, Count: 1 });
            }
        }
        return result;
    }


    // Sort students by age

    studentSort(): studentDetail[] {
        return students.slice().sort((a, b) => a.Age - b.Age);
    }


    //Check if all students are above 18

    AllStudents18(): boolean {
        return students.every(student => student.Age > 18);
    }
}






const studentList1 = new student();
// console.log(studentList1.startWithM());

const studentList2 = new student();
//console.log(studentList2.ageGreterthen20());

const studentList3 = new student();
//console.log(studentList3.getIt());

const studentList4 = new student();
//console.log(studentList4.getName());

const studentList5 = new student();
// console.log(studentList5.infoStudent());

const studentList6 = new student();
// console.log(studentList6.departmentInfo());

const studentList7 = new student();
// console.log(studentList7.studentInfo());

const studentList8 = new student();
// console.log(studentList8.department())

const studentList9 = new student();
// console.log(studentList9.studentList())

const studentList10 = new student();
// console.log(studentList10.subjectMath())

const studentList12 = new student();
// console.log(studentList12.getSubject())

const studentList13 = new student();
// console.log(studentList13.groupDepartment())

const studentList14 = new student();
// console.log(studentList14.studentSort())

const studentList15 = new student();
// console.log(studentList15.AllStudents18())


// The code defines a function called Fibonacci that takes three parameters:
// num: The upper limit for the Fibonacci series
// num1: First number (default value is 0)
// num2: Second number (default value is 1)
// Inside the Fibonacci function:
// It creates an empty array called series to store the Fibonacci numbers
// It defines a nested function generateFib that uses recursion to generate the series
// The recursive function generateFib works like this:
// Takes two parameters a and b representing the current and next numbers
// If a is greater than or equal to the limit num, it stops
// Otherwise, it:
// Adds the current number a to the series array
// Calls itself with the next pair of numbers (b and a + b)
// The workflow when you call Fibonacci(10):
// Starts with num1 = 0 and num2 = 1
// First call: generateFib(0, 1)
// Adds 0 to series
// Calls generateFib(1, 1)
// Second call: generateFib(1, 1)
// Adds 1 to series
// Calls generateFib(1, 2)
// Third call: generateFib(1, 2)
// Adds 1 to series
// Calls generateFib(2, 3)
// And so on until reaching numbers greater than or equal to 10
// The final output will be: [0, 1, 1, 2, 3, 5, 8]
// This is a recursive implementation of the Fibonacci series, where each number is the sum of the two preceding ones. The recursion continues until it reaches the specified limit (10 in this case).
// Would you like me to help you modify this code in any way or would you like to see a different implementation of the Fibonacci series?
