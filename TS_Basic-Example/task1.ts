// Create a class Customer with:
// Protected property details: { name: string, email: string }
// Method getCustomerInfo(): string returning customer details.


class Customer {
    protected name: string;
    protected email: string;


    constructor(name: string, email: string) {
        this.name = name;
        this.email = email
    }

    getCustomerInfo(): string {
        return (`Name of Customer is ${this.name} and email: ${this.email}.`);
    }
}


const customer1 = new Customer('Hardik Suvan', 'hardik20@gmail.com');
console.log(customer1.getCustomerInfo());


// Create a class Admin that extends Customer:
// Private property: permissions: string[]
// Method: addPermission(permission: string): void


class Admin extends Customer {
    private permissions: string[] = [];

    constructor(name: string, email: string) {
        super(name, email)
    }

    addpermission(permission: string): void {
        this.permissions.push(permission);

    }
    getpermission(): string[] {
        return this.permissions;
    }
}


const Admin1 = new Admin('Hardik Suvan', 'hardik20@gmail.com');
console.log(Admin1.getCustomerInfo());


Admin1.addpermission("Play Game");
console.log(Admin1.getpermission())



// Create a base class Shape with:
// Method getArea(): number (returns 0 by default)
// Create derived classes:
// Rectangle with properties: width and height
// Circle with property: radius
// Each class should override getArea() to calculate the correct area.

class Shape {

    getArea(): number {
        return 0;
    }
}


class Rectangle extends Shape {

    constructor(public width: number, public height: number) {
        super()

    }

    getArea(): number {
        return this.width * this.height
    }

}

const Rectangle1 = new Rectangle(10, 5);
console.log(Rectangle1.getArea());


class Circle extends Shape {

    constructor(public radius: number) {
        super()

    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}


const Circle1 = new Circle(10);
console.log(Circle1.getArea());


// Create a class Employee with:
// id, name, and designation as public properties (use constructor shorthand)
// Method getInfo(): string to return employee details.


export class Employee {

    public id: number;
    public name: string;
    public designation: string;

    constructor(id: number, name: string, designation: string,) {
        this.id = id;
        this.name = name;
        this.designation = designation;
    }
    getInfo(): string {
        return `Employee id is ${this.id}, name of Employee is ${this.name}. designation is : ${this.designation}.`
    }
}

const Employee1 = new Employee(1, "Hardik suvan", "no")
console.log(Employee1.getInfo());


// Define an interface Printable with method print(): void.
// Create a class Report that implements Printable and defines the print() method.


interface Printable {
    print(): string
}

class Report1 implements Printable {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    print(): string {
        return this.name
    }
}

const Report2 = new Report1("hardik")
console.log(Report2.print());


