// --- 1. CREATION ---
console.log("--- 1. Array Creation ---");
let fruits = ["Apples", "Banana", "Orange"];
let emptyArray = [];
let mixedArray = [1, "Hello", true, { type: "mixed" }];

console.log("Fruits:", fruits);
console.log("Empty Array:", emptyArray);
console.log("Mixed Array:", mixedArray);

// --- 2. ACCESSING ELEMENTS (Read) ---
// Arrays are 0-indexed (the first element is at index 0)
console.log("\n--- 2. Accessing Elements ---");
console.log("First fruit:", fruits[0]); // Apples
console.log("Second fruit:", fruits[1]); // Banana
console.log("Last fruit (using length):", fruits[fruits.length - 1]); // Orange
console.log("Accessing out of bounds:", fruits[5]); // undefined

// --- 3. UPDATING ELEMENTS (Write) ---
console.log("\n--- 3. Updating Elements ---");
fruits[1] = "Blueberry"; // Change "Banana" to "Blueberry"
console.log("Fruits after update:", fruits); // ["Apples", "Blueberry", "Orange"]

// --- 4. GETTING LENGTH/SIZE ---
console.log("\n--- 4. Getting Array Length ---");
console.log("Number of fruits:", fruits.length); // 3

// --- 5. ADDING ELEMENTS ---
console.log("\n--- 5. Adding Elements ---");
// a) At the END (push) - most common
fruits.push("Date");
console.log("After push('Date'):", fruits); // ["Apples", "Blueberry", "Orange", "Date"]

// b) At the BEGINNING (unshift) - can be less performant for large arrays
fruits.unshift("Water Melon");
console.log("After unshift('Water Melon'):", fruits); // ["Water Melon", "Apples", "Blueberry", "Orange", "Date"]

// c) At a SPECIFIC INDEX (splice)
// splice(startIndex, deleteCount, item1, item2, ...)
fruits.splice(2, 0, "Avocado"); // Insert "Avocado" at index 2, delete 0 items
console.log("After splice(2, 0, 'Avocado'):", fruits);
// ["Water Melon", "Apples", "Avocado", "Blueberry", "Orange", "Date"]

// --- 6. REMOVING ELEMENTS ---
console.log("\n--- 6. Removing Elements ---");
// a) From the END (pop) - most common
let lastFruit = fruits.pop();
console.log("Removed last fruit (pop):", lastFruit); // Date
console.log("Fruits after pop:", fruits); // ["Water Melon", "Apples", "Avocado", "Blueberry", "Orange"]

// b) From the BEGINNING (shift) - can be less performant for large arrays
let firstFruit = fruits.shift();
console.log("Removed first fruit (shift):", firstFruit); // Water Melon
console.log("Fruits after shift:", fruits); // ["Apples", "Avocado", "Blueberry", "Orange"]

// c) From a SPECIFIC INDEX (splice)
// splice(startIndex, deleteCount)
let removedItems = fruits.splice(1, 2); // Remove 2 items starting from index 1 ("Avocado", "Blueberry")
console.log("Removed items with splice(1, 2):", removedItems); // ["Avocado", "Blueberry"]
console.log("Fruits after splice(1, 2):", fruits); // ["Apples", "Orange"]

// --- 7. FINDING ELEMENTS ---
console.log("\n--- 7. Finding Elements ---");
fruits.push("Banana", "Date", "Blueberry");
console.log("Current fruits for finding:", fruits); // ["Apples", "Orange", "Banana", "Date", "Blueberry"]

// a) Check if an element exists (includes) - returns true/false
console.log("Includes 'Banana'?", fruits.includes("Banana")); // true
console.log("Includes 'Mango'?", fruits.includes("Mango")); // false

// b) Get the index of an element (indexOf) - returns index or -1 if not found
console.log("Index of 'Date':", fruits.indexOf("Date")); // 3
console.log("Index of 'Mango':", fruits.indexOf("Mango")); // -1

// c) Get the last index of an element (lastIndexOf) - useful if duplicates exist
fruits.push("Banana"); // Add another "Banana"
console.log("Fruits with duplicate Banana:", fruits);
console.log("indexOf 'Banana':", fruits.indexOf("Banana")); // First occurrence
console.log("lastIndexOf 'Banana':", fruits.lastIndexOf("Banana")); // Last occurrence

// --- 8. ITERATION (Looping) ---
console.log("\n--- 8. Iterating Through Array ---");
// a) Standard for loop
console.log("Using standard for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

// b) for...of loop (simpler for just getting values)
console.log("\nUsing for...of loop:");
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// c) forEach method (executes a function for each element)
console.log("\nUsing forEach method:");
fruits.forEach(function (fruit, index, array) {
  console.log(`forEach - Index: ${index}, Fruit: ${fruit}`);
});

// --- 9. OTHER USEFUL ARRAY METHODS (Brief Introduction) ---
console.log("\n--- 9. Other Useful Array Methods ---");
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

// a) slice() - Returns a shallow copy of a portion of an array (non-destructive)
let subArray = numbers.slice(1, 4); // Elements from index 1 up to (but not including) index 4
console.log("numbers.slice(1, 4):", subArray); // [2, 3, 4]
console.log("Original numbers (unchanged by slice):", numbers);

// b) map() - Creates a new array by calling a function on every element (non-destructive)
let doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log("numbers.map (doubled):", doubledNumbers); // [2, 4, 6, 8, 10]

// c) filter() - Creates a new array with elements that pass a test (non-destructive)
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("numbers.filter (even):", evenNumbers); // [2, 4]

// d) reduce() - Applies a function against an accumulator and each element to reduce it to a single value
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
console.log("numbers.reduce (sum):", sum); // 15

// e) join() - Joins all elements of an array into a string
let fruitString = fruits.join(", ");
console.log("Fruits joined by ', ':", fruitString);

// f) sort() - Sorts an array (can be tricky, sorts lexicographically by default)
let unsortedFruits = ["Date", "Apples", "Orange", "Banana"];
unsortedFruits.sort();
console.log("Sorted fruits (lexicographically):", unsortedFruits); // ["Apples", "Banana", "Orange", "Date"]

let unsortedNumbers = [10, 5, 100, 1, 25];
unsortedNumbers.sort(); // BE CAREFUL! This is lexicographical: [1, 10, 100, 25, 5]
console.log(
  "Sorted numbers (lexicographically - likely WRONG):",
  unsortedNumbers
);
// To sort numbers correctly:
unsortedNumbers.sort(function (a, b) {
  return a - b;
}); // Ascending
console.log("Sorted numbers (numerically ascending):", unsortedNumbers);
unsortedNumbers.sort(function (a, b) {
  return b - a;
}); // Descending
console.log("Sorted numbers (numerically descending):", unsortedNumbers);

// g) reverse() - Reverses an array in place
fruits.reverse();
console.log("Reversed fruits:", fruits);

if (fruits.includes("Banana")) {
  fruits[fruits.indexOf("Banana")];
  console.log(fruits[fruits.indexOf("Banana")]);
}

for (let key in banana) {
  if (banana.hasOwnProperty(key)) {
    console.log(`Key is:  ${key}`);
  }
}
