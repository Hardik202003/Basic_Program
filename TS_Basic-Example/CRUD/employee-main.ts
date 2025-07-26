import { Employee } from "./employee";
import { EmployeeService } from "./employeeService";


const newEmployee: Employee = {
    firstName: "hardik",
    lastName: "suvan",
    email: "john.doe@example.com",
    phone: 1234567890,
    department: "Engineering",
    position: "Software Developer",
    salary: 85000,
    hireDate: "2024-03-20"
};

const employeeService = new EmployeeService();

// employeeService.add(newEmployee)
//     .then((user) => {
//         console.error(user);
//     })
//     .catch((message) => {
//         console.error("Error:", message);
//     })



const updateEmployee: Employee = {
    id: 1,
    firstName: "hardik",
    lastName: "suvan",
    email: "sophia.martinez@example.com",
    phone: 3055550174,
    department: "Finance",
    position: "Accountant",
    salary: 72000,
    hireDate: "2019-01-20",
}

// employeeService.update(updateEmployee)
//     .then((updated) => {
//         console.log(updated);
//     })
//     .catch((error: string) => {
//         console.error('Error:', error);
//     });





employeeService.delete(updateEmployee)

    .then((deleteEmp: Employee | string) => {
    console.log(typeof deleteEmp);
    console.log(deleteEmp);
    // if (deleteEmp && typeof deleteEmp === 'object') {
    //     alert("Delete successful");
    })


    .catch((error) => {
        console.error('Error:', error);
    })

// console.log(employeeService.getAll());

