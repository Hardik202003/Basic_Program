let employees = [
    { id: "1", name: "hardik", age: 21, address: "panvi", study: "BE", salary: 10000 },
    { id: "2", name: "Mit", age: 21, address: "panvi", study: "BE", salary: 20000 },
    { id: "3", name: "Maulik", age: 21, address: "panvi", study: "BE", salary: 15000 },
    { id: "4", name: "Shubham", age: 21, address: "panvi", study: "BE", salary: 16000 },
    { id: "5", name: "Nikul", age: 21, address: "panvi", study: "BE", salary: 8000 },
    { id: "6", name: " Pankaj", age: 21, address: "panvi", study: "BE", salary: 5000 }
];


let employeeId = prompt("Enter the employee ID:");

let employee = null;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
        employee = employees[i];
        break;
    }
}

if (employee) {
    let newName = prompt("Enter the new name:", employee.name);
    let newAge = prompt("Enter the new age:", employee.age);
    let newAddress = prompt("Enter the new address:", employee.address);
    let newStudy = prompt("Enter the new study:", employee.study);


    employee.name = newName;
    employee.age = newAge;
    employee.address = newAddress;
    employee.study = newStudy;

    console.log("Employee details updated");

} else {
    let newName = prompt("Enter the name:");
    let newAge = prompt("Enter the age:");
    let newAddress = prompt("Enter the address:");
    let newStudy = prompt("Enter the study:");


    employees.push({ id: employeeId, name: newName, age: newAge, address: newAddress, study: newStudy });

    console.log("New employee added");
}

console.log(employees);



let empname = employees.filter(emp => emp.salary > 10000).map(emp => emp.name);

console.log(empname);



employees.forEach(emp => {
    let bonus = emp.salary > 10000 ? 10000 : 20000;
    console.log(emp.name,":",bonus);
});

