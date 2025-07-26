// Manipulate a Nested Object Using Rest and Spread : -
let user = {
  id: 101,
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890"
  },
  preferences: {
    theme: "dark",
    language: "en"
  }
};
 
// Create a new object called updatedUser that:



// Extract the id and name properties into variables using destructuring with the rest operator to store the remaining properties in a variable .

let updatedUser = {...user};

console.log(updatedUser);

// Overrides the email in contact with "newalice@example.com".

let Overrides = { ...user, contact: { ...user.contact, email: "newalice@example.com"},};

console.log(Overrides);


// Adds a new preference notifications: true.

let newPreference =   {...user, preferences: {...user.preferences, notifications: true}};

console.log(newPreference);



let { id, name, ...other } = user;

console.log(id, name, other);
