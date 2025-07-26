let num: number = 23;
console.log(num);

let abc: string = "hardik";
console.log(abc);


// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}-even`)
//     }
//     else {
//         console.log(`${i}-odd`)
//     }
// }

let a: any = "hk";
console.log(a);


function dullfun (val1 : string, val2 : string ): any  {
    console.log("i will ok");
}

dullfun("hardik","suvan");

console.log("hardik");


function multiply(a: number, b: number) {
 console.log (a * b);
}
multiply(2,3);

export interface Rectangle {
  height?: number,
  width?: number
}

interface ColoredRectangle extends Rectangle {
  color?: string
}

let num1 : ColoredRectangle = {
    height : 20,
    width :  50
};



// classes

class Person implements Rectangle {
  name: string;
  age: number;
  height?: number;
  width?: number;
  
  // constructor() {

  // }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); 

const person2 = new Person("hardik", 22);


// public

export class Car {
  public brand: string = "bmw";

  constructor(brand: string) {
    this.brand = brand;
  }

  public drive(): void {
    console.log(`Driving a ${this.brand}`);
  }
}

const car = new Car("Toyota");
console.log(car.brand); // ✅ Accessible
car.drive();             // ✅ Accessible




// privet

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  private updateBalance(amount: number): void {
    this.balance += amount;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Allowed
// console.log(account.balance);   // ❌ Error: Property 'balance' is private
//  account.updateBalance(500);     // ❌ Error: Method is private


// protected

export class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }
}

export class Manager extends Employee {
  displaySalary(): void {
    console.log(`Manager's salary is ${this.salary}`); // ✅ Allowed
  }
}

const manager = new Manager(5000);
manager.displaySalary();          // ✅ Allowed
// console.log(manager.salary);   // ❌ Error: Property 'salary' is protected

