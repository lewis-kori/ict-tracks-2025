# 🧠 Programming Paradigms Assignment

**Course:** Software Engineering Foundations
**Topic:** Programming Paradigms (Procedural, OOP, Functional, Declarative)
**Due Date:** 2025-07-02 19:00
**Points:** 30
**Estimated Time:** 60–90 minutes

---

## 📘 Learning Objectives

By completing this assignment, you will:

* Understand the concept of programming paradigms
* Compare Procedural, Object-Oriented, Functional, and Declarative approaches
* Implement solutions using different paradigms in JavaScript
* Reflect on tradeoffs and applicability of each paradigm

---

## 📂 Submission Instructions

1. Create two files:

    * `assignment.js` – for your code examples
    * `answers.md` – for written answers and explanations

2. Write your name and the date at the top of both files.
3. Answer all questions and complete all coding tasks.
4. When done, submit both files by uploading them to the class portal, sharing via Google Drive, or emailing them (as instructed).

---

## 🧩 Part 1: Concept Check (5 pts)

Answer the following **in your own words** in `answers.md`:

1. What is a programming paradigm?
2. How is Object-Oriented Programming different from Procedural Programming?
3. Give one real-world analogy for Functional Programming.
4. Why might someone choose Declarative code over Procedural in UI development?

---

## 🔨 Part 2: Code Transformations (10 pts)

You are given this **procedural code**:

```javascript
const radius = 7;

function calculateCircumference(r) {
  return 2 * Math.PI * r;
}

console.log(calculateCircumference(radius));
```

### 2A. Rewrite this using **Object-Oriented Programming (OOP)**

* Create an object representing a circle.
* Include a method `getCircumference()` that returns the result.

### 2B. Rewrite this using **Functional Programming**

* Create a **pure function** that takes radius as input.
* Use `map()` to calculate circumferences for multiple radii:
  Example:

  ```javascript
  const radii = [3, 5, 7];
  ```

---

## 🧱 Part 3: Paradigm Mapping (5 pts)

Match each of the following real-world use cases to the **most appropriate paradigm**. Write your answers in `answers.md`, and briefly justify each choice.

| Scenario                                                                  | Paradigm (Procedural / OOP / Functional / Declarative) |
| ------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1. Building a complex UI with reusable components                         |                                                        |
| 2. Writing a short script to automate image resizing                      |                                                        |
| 3. Creating a math utility library that’s easy to test and reuse          |                                                        |
| 4. Modeling different types of bank accounts with shared and custom rules |                                                        |

---

## 🧪 Part 4: Apply & Reflect (10 pts)

You're building a simple **To-Do List** manager. The features:

* Add tasks
* Mark tasks as complete
* Print number of pending tasks

### 4A. Choose one paradigm:

* Procedural
* Object-Oriented
* Functional

Write a small code sketch implementing the task logic using your chosen paradigm. Add inline comments.

### 4B. Reflect on your choice (in `answers.md`):

* Why did you choose this paradigm?
* What are its tradeoffs or strengths?
* Would your solution scale in a large team or codebase?

---

## 📊 Rubric

| Criteria                            | Points |
| ----------------------------------- | ------ |
| Clear understanding of concepts     | 5      |
| Code transformation correctness     | 10     |
| Paradigm matching + rationale       | 5      |
| To-do list implementation & clarity | 10     |
| **Total**                           | **30** |

---

## 🧠 Tips

* Comment your code — especially where you're applying paradigm-specific concepts (`this`, pure functions, object methods).
* Focus on clarity over cleverness.
* Stick to JavaScript, but feel free to use modern features (ES6+).

---

## 📚 Resources

* [MDN: JavaScript Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [Eloquent JavaScript: Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html)
* [React: Declarative UI Concepts](https://react.dev/learn/your-first-component)
* [Fun Fun Function: Functional Programming in JS](https://www.youtube.com/watch?v=BMUiFMZr7vk)

---
