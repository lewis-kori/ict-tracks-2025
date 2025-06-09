// --- 1. CREATION ---
console.log("\n\n--- 1. Object Creation ---");
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    // Objects can contain other objects
    street: "123 Main St",
    city: "Anytown",
  },
};
let emptyObject = {};

console.log("Person object:", person);
console.log("Empty object:", emptyObject);

// --- 2. ACCESSING VALUES (Read) ---
console.log("\n--- 2. Accessing Values ---");
// a) Dot notation (preferred if the key is a valid identifier)
console.log("First Name (dot):", person.firstName); // John
console.log("City (dot nested):", person.address.city); // Anytown

// b) Bracket notation (required if key has spaces, special chars, or is a variable)
console.log("Last Name (bracket):", person["lastName"]); // Doe
let propertyName = "age";
console.log("Age (bracket with variable):", person[propertyName]); // 30
console.log("Accessing non-existent property:", person.email); // undefined

// --- 3. UPDATING VALUES (Write) ---
console.log("\n--- 3. Updating Values ---");
person.age = 31; // Update age
person["isStudent"] = true; // Update isStudent
person.address.street = "456 Oak Ave"; // Update nested property
console.log("Person after updates:", person);

// --- 4. ADDING NEW KEY-VALUE PAIRS ---
console.log("\n--- 4. Adding New Key-Value Pairs ---");
person.email = "john.doe@example.com"; // Add new property using dot notation
person["phone"] = "555-1234"; // Add new property using bracket notation
person.hobbies = ["reading", "hiking"]; // Add a property that is an array
console.log("Person after adding new properties:", person);

// --- 5. REMOVING KEY-VALUE PAIRS (delete operator) ---
console.log("\n--- 5. Removing Key-Value Pairs ---");
delete person.isStudent;
delete person["phone"];
console.log("Person after deleting 'isStudent' and 'phone':", person);
// Note: 'delete' removes the property. Setting to 'undefined' or 'null' just changes the value.

// --- 6. CHECKING IF A KEY EXISTS ---
console.log("\n--- 6. Checking if a Key Exists ---");
// a) 'in' operator
console.log("'firstName' in person?", "firstName" in person); // true
console.log("'isStudent' in person?", "isStudent" in person); // false (we deleted it)
console.log("'toString' in person?", "toString" in person); // true (checks prototype chain too)

// b) hasOwnProperty (checks only the object itself, not its prototype chain)
console.log(
  "person.hasOwnProperty('lastName')?",
  person.hasOwnProperty("lastName")
); // true
console.log(
  "person.hasOwnProperty('toString')?",
  person.hasOwnProperty("toString")
); // false

// c) Comparing with undefined (can be ambiguous if a property is explicitly set to undefined)
console.log("person.age !== undefined?", person.age !== undefined); // true
console.log(
  "person.nonExistentProp !== undefined?",
  person.nonExistentProp !== undefined
); // false

// --- 7. GETTING ALL KEYS ---
console.log("\n--- 7. Getting All Keys ---");
let personKeys = Object.keys(person);
console.log("Keys of person object:", personKeys); // Returns an array of keys

// --- 8. GETTING ALL VALUES ---
console.log("\n--- 8. Getting All Values ---");
let personValues = Object.values(person);
console.log("Values of person object:", personValues); // Returns an array of values

// --- 9. GETTING ALL ENTRIES (Key-Value Pairs) ---
console.log("\n--- 9. Getting All Entries ---");
let personEntries = Object.entries(person);
console.log("Entries (key-value pairs) of person object:", personEntries);
// Each entry is an array: [key, value]

// --- 10. ITERATION (Looping) ---
console.log("\n--- 10. Iterating Through Object ---");
// a) for...in loop (iterates over enumerable property keys, including inherited ones)
console.log("Using for...in loop (use hasOwnProperty for own properties):");
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    // Good practice to check
    console.log(`Key: ${key}, Value: ${person[key]}`);
  }
}

// b) Using Object.keys() and forEach (or for...of)
console.log("\nUsing Object.keys() and forEach:");
Object.keys(person).forEach(function (key) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
});

// c) Using Object.entries() and for...of (modern and often cleanest)
console.log("\nUsing Object.entries() and for...of:");
for (const [key, value] of Object.entries(person)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// --- 11. OBJECT SPREAD AND MERGING (ES6+) ---
console.log("\n--- 11. Object Spread and Merging ---");
let defaults = { theme: "dark", notifications: true };
let userSettings = { notifications: false, username: "user123" };

// Spread syntax to merge: properties from later objects overwrite earlier ones
let mergedSettings = { ...defaults, ...userSettings };
console.log("Merged settings:", mergedSettings);
// { theme: 'dark', notifications: false, username: 'user123' }

// --- 12. OBJECT DESTRUCTURING (ES6+) ---
console.log("\n--- 12. Object Destructuring ---");
const { firstName, age, email: userEmail } = person; // 'email: userEmail' renames 'email' to 'userEmail'
console.log("Destructured - firstName:", firstName);
console.log("Destructured - age:", age);
console.log("Destructured and renamed - userEmail:", userEmail);

const { city } = person.address; // Destructuring nested objects
console.log("Destructured nested - city:", city);