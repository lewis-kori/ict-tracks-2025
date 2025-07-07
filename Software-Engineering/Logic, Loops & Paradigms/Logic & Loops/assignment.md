# Assignment: Logic, Loop & OOP Concepts

**Take-Home Assignment**

**Mentor:** Lewis Kori

**Language:** JavaScript (ES6+)

**Date:** June 23, 2025

---

## Assignment: Logic, Loops & OOP Concepts

### 🎯 Goal

Apply conditional logic and iteration skills, and prepare for object-oriented programming by exploring core concepts.

---

### Code Practice

Update the following code to improve the roll call logic:

```javascript
const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");

for (const student of students) {
  if (student.startsWith("A") && student.endsWith("e")) {
    console.log(`- Welcome, ${student}!\`);
  }
}

// TODO: Check if either condition qualifies (starts with A OR ends with e)
// TODO: Use .toLowerCase() to make it case-insensitive

```

### 💡 Stretch Goals

1. Extract the conditional logic into a function.
2. Add support for middle names or multiple parts.
3. Create a dynamic array that accepts user input until they type "done".

---

### 📚 Reading Assignment: OOP Concepts

Research and take notes on the following key principles of Object-Oriented Programming:

- **Abstraction:** Hiding complex logic behind simpler interfaces.
- **Encapsulation:** Grouping data (properties) and methods into objects; protecting internal state.
- **Inheritance:** One object or class can inherit behaviour and properties from another.
- **Polymorphism:** Different objects can respond differently to the same method call.

Be ready to discuss with practical examples during the next session.

---

## 🔗 Learning Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Eloquent JavaScript – Chapters 4, 6, 8](https://eloquentjavascript.net/)
- [MDN: Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [MongoDB University](https://university.mongodb.com/)
- Book: *Database Design for Mere Mortals* by Michael J. Hernandez

---

Happy coding! 🚀
