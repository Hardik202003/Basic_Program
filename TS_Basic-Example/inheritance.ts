// // Base (Parent) class
// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound(): void {
//     console.log(`${this.name} makes a generic animal sound.`);
//   }

//   move(distance: number): void {
//     console.log(`${this.name} moved ${distance} meters.`);
//   }
// }

// // Derived (Child) class
// class Dog extends Animal {
//   breed: string;

//   constructor(name: string, breed: string) {
//     super(name); // Call the parent constructor
//     this.breed = breed;
//   }

//   // Method overriding
//   makeSound(): void {
//     console.log(`${this.name} barks.`);
//   }

//   fetch(): void {
//     console.log(`${this.name} is fetching a ball.`);
//   }
// }

// // Another derived class
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   // Method overriding
//   makeSound(): void {
//     console.log(`${this.name} meows.`);
//   }

//   scratch(): void {
//     console.log(`${this.name} is scratching.`);
//   }
// }

// // --------- Usage ---------
// const genericAnimal = new Animal("Generic");
// genericAnimal.makeSound(); // Generic makes a generic animal sound.
// genericAnimal.move(5);

// const dog = new Dog("Buddy", "Golden Retriever");
// dog.makeSound();  // Buddy barks.
// dog.move(10);     // Inherited method
// dog.fetch();      // Dog-specific method

// const cat = new Cat("Whiskers");
// cat.makeSound();  // Whiskers meows.
// cat.move(3);      // Inherited method
// cat.scratch();    // Cat-specific method
