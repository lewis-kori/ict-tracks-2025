---
title: Programming Paradigms
icon: 🧠
createdAt: '2025-06-16T08:05:42.069Z'
creationDate: 2025-06-16 11:05
modificationDate: 2025-06-21 10:47
tags: [Programming, Paradigms]
---

# 🧱 Programming Paradigms

**Approx. 45 minutes**

### 🎯 Concept: A "Style" of Programming

A **programming paradigm** is a *way of thinking about and structuring your code*. It’s like choosing an architectural style when building a house — the result can serve the same purpose, but how you design and build it is very different.

---

### 🧩 Analogy: Building with LEGOs

* **Procedural**: You follow one long list of instructions.

  > “Place a red brick. Place a blue brick. Now attach the roof.”
  > You are giving exact steps from start to finish.

* **Object-Oriented (OOP)**:

  > “First build the wheel unit. Then the chassis. Then assemble them to make the car.”
  > You create reusable modules (objects) and combine them.

---

## 🔃 Procedural Programming

### 🧠 Definition

A style where you solve problems by writing *step-by-step instructions*.
Data and logic are **separate** — you pass data into functions.

### ✅ Good For

* Simple scripts
* Clear, linear flows
* Beginners learning core concepts

### 📦 Example: Calculate Rectangle Area (Procedural)

```javascript
// Data is separate
const width = 10;
const height = 5;

// Function is separate
function calculateArea(w, h) {
  return w * h;
}

// Using the function with the data
const area = calculateArea(width, height);
console.log(`The area is ${area}.`); // The area is 50.
```

---

## 🧱 Object-Oriented Programming (OOP)

### 🧠 Definition

A style where you bundle related data and functionality together into *objects*.
It’s great for modeling real-world entities and scaling large codebases.

### 🔑 Core Concepts

| Concept      | What It Is                                   |
| ------------ | -------------------------------------------- |
| **Object**   | A self-contained unit with data + behavior   |
| **Property** | A variable inside the object (data)          |
| **Method**   | A function inside the object (behavior)      |
| **this**     | Refers to the current object inside a method |

### ✅ Good For

* Apps with many interacting entities
* UI development (e.g., components in React)
* Game development, simulations

### 📦 Example: Rectangle with OOP

```javascript
const rectangle = {
  width: 10,
  height: 5,

  // Methods
  calculateArea: function() {
    return this.width * this.height;
  },

  describe: function() {
    console.log(`This is a rectangle with width ${this.width} and height ${this.height}.`);
  }
};

// Using the object
rectangle.describe(); // This is a rectangle with width 10 and height 5.
const area = rectangle.calculateArea();
console.log(`Its area is ${area}.`); // Its area is 50.
```

---

## 🔁 Functional Programming (Intro)

### 🧠 Definition

A style focused on **pure functions** (no side effects), **immutability**, and treating functions like first-class citizens.

### 🧬 Key Traits

* Data is never mutated (you create new versions instead)
* Functions can be passed around like values
* Easier to test and reason about

### 🧠 Example: Functional rectangle area

```javascript
// Pure function: no external state, always same result
const calculateArea = (width, height) => width * height;

console.log(calculateArea(10, 5)); // 50
```

---

## 🌱 Declarative Programming (Preview)

### 🧠 Definition

A style where you describe **what you want**, not **how to do it**.
You *declare intent*, and the system figures out the details.

### 🧬 Example: CSS

```css
button {
  background-color: blue;
  font-size: 16px;
}
```

You don’t write how the browser should render — you just declare *what* you want.

### 🧬 Example: React (Declarative UI)

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

You’re not telling the browser to `createElement`, append it, and so on — you declare the result.

---

## 🧮 Summary Table

| Paradigm            | Core Idea                         | Data & Behavior | Good For                              |
| ------------------- | --------------------------------- | --------------- | ------------------------------------- |
| **Procedural**      | Do steps one by one               | Separate        | Scripts, algorithms                   |
| **Object-Oriented** | Bundle data + behavior in objects | Together        | Apps with complex state               |
| **Functional**      | Pure functions, no side effects   | Separate        | Clean logic, predictable code         |
| **Declarative**     | Describe what you want            | Depends         | UI development, configuration systems |

