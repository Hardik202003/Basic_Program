// Scenario: Write a simple TypeScript function to add two numbers.

function addNum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNum(10, 5));


// Scenario: Create an object representing a book with properties title, author, and publishedYear. Define an interface for it.

interface Forobject {
    title: string,
    author: string,
    publishedYear: number
}

let book: Forobject[] = [
    {
        title: "The Post Office",
        author: "Rabindranath Tagore",
        publishedYear: 1912
    },

    {
        title: "The Post Office1",
        author: "Rabindranath Tagore",
        publishedYear: 1924
    },

    {
        title: "The Post Office2",
        author: "Rabindranath Tagore",
        publishedYear: 1936
    }
]


// Problem: Write a function to flatten a nested array (i.e., an array that contains arrays)

let arr: any[] = [5, 10, 20, 27, 35, [12345, [12, [100], 32, 45], 21], 11];

function flatarray(input: any[]): void {
    const flattened = input.flat(Infinity);
    console.log(flattened);
}

flatarray(arr);


// Scenario: Use an enum to represent different statuses (e.g., Active, Inactive, Pending) and write a function to print a status message.


enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending"
}

function printStatus(status: Status): void {
    console.log(status);
}

printStatus(Status.Active);
printStatus(Status.Inactive);
printStatus(Status.Pending);


// Scenario: Create a function that accepts either a string or a number and prints a message based on the type.

let movieReview: string | number = "Money heist";

function getReview(title: string): string | number {
    if (title == "Money heist") {
        return `Watch this movie ${movieReview}.`
    } else {
        return 1000;
    }
}

console.log(getReview(movieReview));


// Scenario: Define an interface for a function that takes two numbers and returns a number.

interface main {
    (Number1: number, Number2: number): number;
}

let result: main = (x, y) => {
    return x + y;
};

console.log(result(10, 5));


// Scenario: Create an object that represents a car, where the color property is optional.

interface carInfo {
    brand: string,
    color?: string,
    price: number,
    modification?: boolean
}

let cars: carInfo[] = [
    {
        brand: "Toyota",
        color: "white",
        price: 5000000,
        modification: true
    },
    {
        brand: "Toyota",
        color: "white",
        price: 5000000,
    },
    {
        brand: "Toyota",
        price: 5000000,
    },
]


// Scenario: Define a type alias for a union of string literals representing different fruit types, and create a function that takes a fruit and logs its name.

type Fruit = "apple" | "banana" | "orange";

function FruitName(fruit: Fruit): void {
    console.log(fruit);
}

FruitName("apple");
FruitName("banana");


// Scenario: Create a tuple that represents a person's name and age, and write a function to print both values.

let Person: [string, number] = ['hardik', 21];

function PersonInfo(person: [string, number]): string {
    let [name, age] = person;
    return (`Name: ${name}, Age: ${age}`);
}

console.log(PersonInfo(Person));



// Scenario: Create an object that represents a user, with a readonly property for the user ID, so it can't be changed once set.

class Person1 {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const person = new Person1(10, "hardik");
console.log(person);


// Scenario: Write a function that takes two numbers and returns their sum. If the second parameter is not provided, it defaults to zero.

function sum(a: number, b: number = 0): number {
    return a + b;
}

console.log(sum(10, 5));


// Scenario: Create a tuple representing a product's name, price, and an optional discount.
//  Write a function that logs the product details, including the discount if present.

let product: [string, number, number?] = ["mobile", 20000, 1000]

function productDetails(product: [string, number, number?]): string {
    let [name, price, discount] = product;
    return (`Name: ${name}, Price: ${price}, discount: ${discount || "No discount"}`);
}

console.log(productDetails(product));


// Scenario: Write a function that calculates the area of a rectangle. 
// The function should have default values for width and height if they are not provided.

class Rectangle10 {

    constructor(public width: number, public height: number = 20) {
    }
    getArea(): number {
        return this.width * this.height
    }
}

const Rectangle1 = new Rectangle10(10);
console.log(Rectangle1.getArea());



function Rectangle(width: number = 10, height: number = 20): number {
    return width * height
}

console.log(Rectangle());


// Scenario: Create a function getProperty that takes an object and a property name (as a string) and returns the value of that property.
//  Use the keyof operator to restrict the property name to valid keys of the object.

interface Person {
    firstName: string;
    lastName: string;
}

function getProperty<T, K extends keyof T>(person: T, key: K,): T[K] {
    return person[key];
}

const emp = {
    firstName: "Mukesh",
    lastName: "Jambukiya"
};

console.log(getProperty(emp, "lastName"))



// Scenario: Define an interface Person with a greet method that takes a string greeting and prints a message.
//  Implement this interface in a class.

class Student implements Person {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getInfo(): string {
        return `Student Fullname is ${this.firstName} ${this.lastName}.`
    }
}

const person1 = new Student("hardik", "suvan");
console.log(person1.getInfo());


//  Write a function that loops through the array and prints each city.

let cityName: string[] = ["surat", "rajkot", "bhavnagar", "ahemdabad", "jamnagar", "botad"];

function City(cities: string[]): void {
    for (let i: number = 0; i < cities.length; i++) {
        console.log(cities[i]);
    }
}

City(cityName);
