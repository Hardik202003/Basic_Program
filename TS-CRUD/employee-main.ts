import { Employee } from "./employee";
import { EmployeeService } from "./employeeService";

const newEmployee: Employee = {
    id: 6,
    firstName: "Emma",
    lastName: "Wilson",
    email: "emma.wilson@example.com",
    phone: 2125550167,
    department: "Product Management",
    position: "Product Manager",
    salary: 110000,
    hireDate: "2023-01-15"
};

const employeeService = new EmployeeService();
employeeService.add(newEmployee);
//console.log(employeeService.employeesData);

const updatedEmployee: Employee = {
    id: 3, 
    firstName: "Michael",
    lastName: "Lee",
    email: "michael.lee.updated@example.com",
    phone: 4155550112,
    department: "Marketing",
    position: "Senior Marketing Analyst", 
    salary: 78000,
    hireDate: "2020-09-05"
};

employeeService.update(updatedEmployee);
//console.log(employeeService.employeesData);

const employeeToDelete: Employee = {
    id: 4,
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    phone: 3055550174,
    department: "Finance",
    position: "Accountant",
    salary: 72000,
    hireDate: "2019-01-20"
};

employeeService.delete(employeeToDelete);
console.log(employeeService.employeesData);


