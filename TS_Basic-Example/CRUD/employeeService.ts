import { Employee } from "./employee";
import { employeesData } from "./employeesData"



export class EmployeeService {

  // OR  get employeesData(): Employee[] {
  //     return employeesData;
  //   }  

  getAll(): Employee[] {
    return employeesData;
  }


  add(emp: Employee): Promise<Employee | string> {
    return new Promise<Employee>((resolve, reject) => {
      if (emp.firstName === emp.lastName) {
        reject('firstName and lastName are same !!!');
      }
      else {
        let maxId = employeesData[0].id ?? 0;
        for (let i = 0; i < employeesData.length; i++) {
          if (employeesData[i].id ?? 0 > maxId) {
            maxId = employeesData[i].id ?? 0;
          }
        }
        emp.id = maxId + 1;
        employeesData.push(emp);
        resolve(emp);
      }
    });
  }

  getById(id: number): Employee | undefined {
    return employeesData.find((emp: Employee) => emp.id === id);
  }

  update(updated: Employee): Promise<Employee> {
    return new Promise<Employee>((resolve, reject) => {

      const index = employeesData.findIndex((e: Employee) => e.id === updated.id);

      if (index === -1) {
        reject('Employee not found');
        return;
      }

      const duplicate = employeesData.some(emp =>
        emp.id !== updated.id &&
        emp.firstName === updated.firstName &&
        emp.lastName === updated.lastName
      );

      if (duplicate) {
        reject('first name and last name already exists');
      } 
      else {
        employeesData[index] = { ...updated };
        resolve(updated);
      }
    });
  }

  delete(employeeToDelete: Employee): Promise<Employee> {
    return new Promise<Employee>((resolve, reject) => {
      const index = employeesData.findIndex((e: Employee) => e.id === employeeToDelete.id);
      if (index === -1) {
        reject('Employee not found');
      } else {
        employeesData.splice(index, 1);
        resolve(employeeToDelete);
      }
    });
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

// const Manager = new EmployeeService();
// console.log(Manager.findIndex(employeesData, 5));



