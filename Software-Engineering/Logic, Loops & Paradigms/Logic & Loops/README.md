---
title: Logic & Control Flow
icon: 🧠
createdAt: '2025-06-16T08:05:42.069Z'
creationDate: 2025-06-16 11:05
modificationDate: 2025-06-21 10:47
tags: [Logic, Loops]
---

**Software Engineering Foundations – Lesson 3 of 10**

**Topic:** Logic, Loops & Paradigms + Database Introduction

**Language:** JavaScript (ES6+)

**Date:** June 17, 2025

**Duration:** 3 Hours (180 mins)

**Mentor:** Lewis Kori

---

### 🌟 Session Goals

By the end of this session, mentees will:

1. Use conditional logic (`if`, `else if`, `else`) to control program behavior.

2. Understand and apply loop structures (`for`, `while`, `for...of`) to handle repetition.

3. Combine conditionals and loops to solve problems effectively.

4. Differentiate between Procedural and Object-Oriented programming paradigms.


---

## 🔄 Part 1: Making Decisions in Code (Conditional Logic)

**Duration:** ~75 minutes

### Concept: Conditional Logic

A program often needs to make decisions: "Should I do this or that?" This is where conditional logic comes in. The core idea is to evaluate whether a condition is `true` or `false` and respond accordingly.

### Syntax:

```text
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if first is false and this one is true
} else {
  // runs if none of the above are true
}
```

### Key Concepts:

- `=` is assignment (e.g., `x = 5`) — sets a value.

- `==` is loose equality — does type coercion (avoid it).

- `===` is strict equality — compares value and type (prefer this).

### 🔒 Strict Equality Explained

`===` **compares both value and data type.** It returns `true` only if both match exactly.

#### Examples:

```text
5 === 5          // true
5 === '5'        // false (string vs number)
true === 1       // false (boolean vs number)
null === undefined // false (different types)
'hello' === 'hello' // true
NaN === NaN      // false (special case)
```

#### Why use `===` instead of `==`?

`==` attempts type coercion and can cause unexpected results:

```text
0 == false       // true
'' == false      // true
null == undefined // true
```

Use `===` for predictable and bug-free code.

#### Bonus Quiz:

What does each return?

```text
console.log(0 === false);     // ?
console.log('' === false);    // ?
console.log(undefined === null); // ?
```

### Comparison Operators:

| Operator | Name                     | Example                               | Meaning                  |
| :------- | :----------------------- | :------------------------------------ | :----------------------- |
| `===`    | Strict equality          | `5 === 5` (true), `5 === '5'` (false) | Same value and same type |
| `!==`    | Strict inequality        | `5 !== 4` (true)                      | Value or type differs    |
| `>`      | Greater than             | `10 > 5` (true)                       | Left is greater          |
| `<`      | Less than                | `3 < 4` (true)                        | Left is smaller          |
| `>=`     | Greater than or equal to | `5 >= 5` (true)                       | Greater or equal         |
| `<=`     | Less than or equal to    | `4 <= 5` (true)                       | Less or equal            |

### Logical Operators:

| Operator | Meaning | Example                          |
| :------- | :------ | :------------------------------- |
| `&&`     | AND     | `a && b` — true if both are true |
| `        |         | `                                |
| `!`      | NOT     | `!a` — true if `a` is false      |

### Live Example:

```text
const age = 20;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

### Extended Exercise: Cafe Bot (Nested Conditionals)

```text
let order = prompt("Welcome! Coffee or tea?").toLowerCase();
if (order === "coffee") {
  let type = prompt("Milk or black?").toLowerCase();
  if (type === "milk") {
    console.log("Coffee with milk coming up!");
  } else if (type === "black") {
    console.log("Black coffee on the way!");
  } else {
    console.log("Sorry, unknown coffee type.");
  }
} else if (order === "tea") {
  let type = prompt("Green or herbal?").toLowerCase();
  if (type === "green") {
    console.log("Green tea it is!");
  } else if (type === "herbal") {
    console.log("Herbal tea for relaxation!");
  } else {
    console.log("That tea is not available.");
  }
} else {
  console.log("We only serve coffee or tea.");
}
```

### Practice Tips – More Examples:

1. **Movie Rating Age Check:**

```text
let age = 16;
if (age >= 18) {
  console.log("You can watch R-rated movies.");
} else {
  console.log("Parental guidance suggested.");
}
```

1. **Password Length Check:**

```text
let password = "admin123";
if (password.length >= 8) {
  console.log("Password strength: Good");
} else {
  console.log("Password too short");
}
```

1. **Discount Checker:**

```text
let total = 1500;
if (total > 1000) {
  console.log("You get a 10% discount!");
}
```

1. **Even or Odd:**

```text
let num = 9;
if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
```