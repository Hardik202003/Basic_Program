// Base class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// Subclass 1
class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks`);
  }
}

// Subclass 2
class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} meows`);
  }
}
 
// Subclass 3
class Cow extends Animal {
  makeSound(): void {
    console.log(`${this.name} moos`);
  }
}

// Polymorphism in action
const animals: Animal[] = [
  new Dog("Buddy"),
  new Cat("Whiskers"),
  new Cow("Daisy")
];

for (const animal of animals) {
  animal.makeSound();  // Each object calls its own implementation
}
