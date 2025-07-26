import { Employee } from "./employee";
import { employeesData } from "./employeesData"
import { EmpService } from "./empService-interface"

export class EmployeeService implements EmpService {

  get employeesData(): Employee[] {
    return employeesData;
  }

  add(emp: Employee): void {
    employeesData.push(emp);
  }

  getById(id: number): Employee | undefined {
    return employeesData.find((emp: Employee) => emp.id === id);
  }

  update(updated: Employee): void {
    const index = employeesData.findIndex((e: Employee) => e.id === updated.id);
    employeesData[index] = { ...updated };
  }

  delete(employeeToDelete: Employee): void {
    const index = employeesData.findIndex((e: Employee) => e.id === employeeToDelete.id);
    employeesData.splice(index, 1);
  }

  findIndex(empOfarray: Employee[], id: number): number {
    for (let i = 0; i < empOfarray.length; i++) {
      if (empOfarray[i].id === id) {
        return i;
      }
    }
    return -1;
  }
}

const Manager = new EmployeeService();
console.log(Manager.findIndex(employeesData, 5));




