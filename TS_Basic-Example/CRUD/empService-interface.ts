import { Employee } from "./employee";


export interface EmpService {
    employeesData : Employee[],
    add(emp: Employee): void,
    getById(id: number): Employee | undefined,
    update(updated: Employee): void,
    delete(employeeToDelete: Employee): void,
}


