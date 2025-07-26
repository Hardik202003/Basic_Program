// let a = {
//     name : "hardik",
//     language : "javaScript"
// }

// let p = {
//     run : () => {
//         console.log("hello")
//     }
// }

// p.__proto__ = a
// console.log(p.name);



class Person {
  constructor(name) {
    this._name = name; // convention: _name is private
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name1(newName) {
      this._name = newName
  }
}

const p = new Person("Alice");
 
p.name1 = "Bob";       
console.log(p.name); 

