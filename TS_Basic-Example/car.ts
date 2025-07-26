// import { Employee } from './app'
// import {Manager} from './app'



// class user extends Employee {      
//     }

// const user1 = new user (13121);
// console.log(user1.getSalary());


// class user2 extends Manager {

// }

// const user3 = new user2(12000);
// user3.displaySalary();


//  class Employee7 {
//   protected salary: number;

//   constructor(salary: number) {
//     this.salary = salary;
//   }

//  async getSalary(): Promise<number> {
//     return this.salary;
//   }
// }

// export class Manager7 extends Employee7 {
//   displaySalary(): void {
//     console.log(`Manager's salary is ${this.salary}`); // ✅ Allowed
//   }
// }

// const manager = new Manager7(5000);
// manager.displaySalary(); 


// Function returning a promise
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async data has been fetched!");
    }, 2000);
  });
}

// Async function using await to handle the promise
async function fetchDataAsync(): Promise<void> {
  try {
    const result = await fetchData();
    console.log(result); // Output: Async data has been fetched!
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// // Call the async function
// fetchDataAsync();



// class DataStore<T> {
//     _data: T[] = [];

//   add(item: T) {
//     this._data.push(item);
//   }

//   getAll(): T[] {
//     return this._data;
//   }
// }

// // Usage
// const stringStore = new DataStore<string>();
// console.log(stringStore.add("Apple"));

// const numberStore = new DataStore<number>();
// console.log(numberStore.add(123));


// function groupStudentsByDepartment(): { department: string, count: number }[] {
//   const grouped = students.reduce((acc, student) => {
//     const dept = student.Department;
//     acc[dept] = (acc[dept] || 0) + 1;
//     return acc;
//   }, {} as { [key: string]: number });

//   return Object.entries(grouped).map(([department, count]) => ({
//     department,
//     count
//   }));
// }


//  uniqueSubjects(): string[] {
//         let allSubjects = students.flatMap(student => student.Subjects);
//         let uniqueSubjects = Array.from(new Set(allSubjects));
//         return uniqueSubjects;
//       }

// const uniqueSubjects = Array.from(new Set(allSubjects));
// return uniqueSubjects;

// // Reusable function to sort students by age
// function sortStudentsByAge(
//   students: Student[],
//   order: 'asc' | 'desc' = 'asc'
// ): Student[] {
//   return students.slice().sort((a, b) =>
//     order === 'asc' ? a.age - b.age : b.age - a.age
//   );
// }

// groupDepartment(): { Department: string, Count: number }[] {
//   let result: { Department: string, Count: number }[] = [];

//   for (let i = 0; i < students.length; i++) {
//       let dept = students[i].Department;
//       let found = false;

//       // Check if department already exists in result
//       for (let j = 0; j < result.length; j++) {
//           if (result[j].Department === dept) {
//               result[j].Count++;
//               found = true;
//               break;
//           }
//       }

//       // If not found, add new entry
//       if (!found) {
//           result.push({ Department: dept, Count: 1 });
//       }
//   }

//   return result;
// }


interface User {
    readonly id: number;
    name: string;
}

let user: User = {
    id: 101,
    name: "Alice"
};

console.log(user.id);  
console.log(user.name); 

user.name = "Bob";      



// enum Status {
//     Active = "ACTIVE",
//     Inactive = "INACTIVE",
//     Pending = "PENDING"
// }

// function printStatus(status: Status): void {
//     switch (status) {
//         case Status.Active:
//             console.log("The status is active");
//             break;
//         case Status.Inactive:
//             console.log("The status is inactive");
//             break;
//         case Status.Pending:
//             console.log("The status is pending");
//             break;
//         default:
//             console.log("Unknown status.");
//     }
// }


// printStatus(Status.Active);
// printStatus(Status.Inactive);
// printStatus(Status.Pending);

