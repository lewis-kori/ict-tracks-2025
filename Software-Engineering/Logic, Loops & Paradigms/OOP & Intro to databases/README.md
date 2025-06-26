---
title: The Four Pillars of OOP (A Deep Dive)
createdAt: '2025-06-24T15:25:58.768Z'
creationDate: 2025-06-24 18:25
modificationDate: 2025-06-24 20:40
tags: [OOP, Databases]
---

### **Introduction (5 mins)**

"Last time, we introduced the idea of OOP as building with components. Today, we're going to learn the architectural principles that make those components strong, secure, and reusable. These four pillars—Encapsulation, Abstraction, Inheritance, and Polymorphism—are what separate writing code from engineering software."

### **Pillar 1: Encapsulation (The Vault)**

- Definition

    The bundling of data and the methods that operate on it into a single unit (usually a class), while restricting direct access to some of the object’s components.

    ### Concept (10 mins)

- **Concept (10 mins):** Encapsulation is the practice of bundling an object's data (properties) and the methods that operate on that data into a single, self-contained unit. Its primary purpose is to protect the integrity of that data by restricting direct access—a principle called **data hiding**.

- **Real-World Analogy:** A bank vault. The money (data) is locked inside. You can't just walk in and take it. You must go through a specific interface—the bank teller (methods)—who follows strict rules (`deposit()`, `withdraw()`) to interact with the money. This prevents accidental or malicious corruption of the data.

- **Why It Matters:** It prevents bugs! By controlling how data is modified, you can ensure it remains in a valid state.

- **Code Example (10 mins):**

```javascript
// Anyone can modify the balance to an invalid state.
class InsecureBankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const myPoorAccount = new InsecureBankAccount("Lewis", 1000);
console.log(`Initial Balance: ${myPoorAccount.balance}`); // 1000

// Direct access leads to problems
myPoorAccount.balance = -50000; // Unrealistic! A balance shouldn't be negative.
console.log(`New Balance: ${myPoorAccount.balance}`); // -50000 (BUG!)
```

```javascript
// We use a private property (#balance) to hide the data.
// Public methods provide controlled access.
class BankAccount {
  #balance = 0; // This is a true private field in modern JS

  constructor(name, startingBalance) {
    this.name = name;
    if (startingBalance > 0) {
      this.#balance = startingBalance;
    }
  }

  // Public method to deposit money (the "teller")
  deposit(amount) {
    if (amount <= 0) {
      console.error("Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
  }

  // Public method to withdraw money (the "teller")
  withdraw(amount) {
    if (amount <= 0) {
      console.error("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.#balance) {
      console.error("Insufficient funds.");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
  }

  // Public "getter" method to safely view the balance
  getBalance() {
    return this.#balance;
  }
}

const mySecureAccount = new BankAccount("Lewis", 1000);
// mySecureAccount.#balance = 5000; // SYNTAX ERROR! Cannot access private field.

mySecureAccount.deposit(500); // "Deposited: $500. New balance: $1500"
mySecureAccount.withdraw(2000); // "Insufficient funds."
console.log(`Final Balance: $${mySecureAccount.getBalance()}`); // 1500
```



### **Pillar 2: Abstraction (The Simple Interface)**

- Definition

    The process of hiding the internal implementation details of a system and exposing only what is necessary through a simplified interface. It helps focus on *what* an object does instead of *how* it does it.

- **Concept (5 mins):** Abstraction means hiding complex implementation details and exposing only the necessary functionality. It is the natural result of good encapsulation. It's about simplifying a complex system by providing a clear, high-level interface.

- **Real-World Analogy:** A car's dashboard. It abstracts away the insane complexity of the engine. To accelerate, you just press the gas pedal. You don't need to know about fuel injection rates, air intake, or piston cycles. The car presents a simple interface for a complex machine.

- **Why It Matters:** It makes your code easier to use and reduces the "cognitive load" on other developers. They don't need to understand *how* your object works, just *what* it can do.

```javascript
class Car {
  #fuelLevel = 100;

  drive() {
    this.#consumeFuel();
    console.log("Driving...");
  }

  #consumeFuel() {
    this.#fuelLevel -= 10;
  }
}

const myCar = new Car();
myCar.drive(); // Driving...
// myCar.#consumeFuel(); // ❌ Not allowed (private)

```

### **Pillar 3: Inheritance (The Family Tree)**

- Definition

    An object-oriented principle where one class (child or subclass) inherits the attributes and behaviours (methods) of another class (parent or superclass). This supports reusability and a hierarchical classification of components.

- **Concept (10 mins):** Inheritance allows a new class (the "child" or "subclass") to acquire the properties and methods of an existing class (the "parent" or "superclass"). This is the primary mechanism for code reuse and for establishing logical hierarchies in your code.

- **Real-World Analogy:** The biological classification of animals. A **Lion** is a type of **Cat**. A **Cat** is a type of **Mammal**. A **Mammal** is a type of **Animal**. A Lion inherits the traits of all its ancestors (it has fur like a mammal, it's a vertebrate like an animal) but also has its own unique features (a mane).

- **Why It Matters:** DRY (Don't Repeat Yourself). You can define common logic once in a parent class and reuse it across multiple child classes.

- **Code Example (10 mins):**

```javascript
// Parent class with shared properties and methods
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`${this.username} has logged in.`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} has logged out.`);
  }
}

// Child class 'Admin' inherits everything from 'User'
class Admin extends User {
  // It gets username, email, login(), and logout() for free!
  constructor(username, email, permissionLevel) {
    super(username, email); // 'super()' calls the parent's constructor
    this.permissionLevel = permissionLevel;
  }

  // Adds its own unique method
  deleteUser(userToDelete) {
    console.log(`Admin ${this.username} has deleted user ${userToDelete.username}.`);
  }
}

const standardUser = new User("Alice", "alice@example.com");
const adminUser = new Admin("Bob", "bob@admin.com", "superuser");

standardUser.login(); // "Alice has logged in."
adminUser.login(); // "Bob has logged in."
adminUser.deleteUser(standardUser); // "Admin Bob has deleted user Alice."

```

### **Pillar 4: Polymorphism (The Shape-Shifter)**

- Definition

    Allows objects of different types to be treated through a standard interface, with each type responding in its own way.

- **Concept (10 mins):** From Greek, meaning "many forms." Polymorphism allows objects of different classes to be treated as objects of a common superclass. The same method can be called on these different objects, and each will respond in its own unique way.

- **Real-World Analogy:** The "play" button on different media devices. If you have a `DVDPlayer` object and a `StreamingApp` object, calling `.play()` on the DVD player spins a disc, while calling `.play()` on the streaming app buffers data from the internet. The same command ("play") produces different, context-appropriate actions.

- **Why It Matters:** It allows for flexible and decoupled code. You can write code that works with a parent class's interface without needing to know the specific details of its many child classes.

- **Code Example (10 mins):**

```javascript
class Document {
  constructor(title) {
    this.title = title;
  }

  // A generic save method
  save() {
    console.log(`Saving the document '${this.title}' to a file...`);
  }
}

class PDF extends Document {
  // Overriding the parent's save method
  save() {
    console.log(`Exporting '${this.title}' as a PDF with high compression...`);
  }
}

class WordDocument extends Document {
  // Overriding in a different way
  save() {
    console.log(`Saving '${this.title}' as a .docx file with metadata...`);
  }
}

const documents = [
  new PDF("MyResume.pdf"),
  new WordDocument("AnnualReport.docx"),
  new Document("Notes.txt") // Uses the original parent method
];

// We can treat all of them as a 'Document' and call the same method
// Each object knows how to perform the action correctly for its type.
for (const doc of documents) {
  doc.save();
}

// --- OUTPUT ---
// Exporting 'MyResume.pdf' as a PDF with high compression...
// Saving 'AnnualReport.docx' as a .docx file with metadata...
// Saving the document 'Notes.txt' to a file...
```

## **Part 2: Databases (The Application's Memory)**

### **Introduction (5 mins)**

"An application without a database is like a person with no long-term memory. It can function in the moment, but as soon as you close it, everything is forgotten. Databases give our applications a persistent memory, allowing them to store, retrieve, and manage data reliably."

### **SQL (Relational) Databases In-Depth (20 mins)**

- **Analogy:** A collection of perfectly organized Excel spreadsheets. Each sheet is a **Table**, each row is a **Record**, and each column is an **Attribute**.

- **Core Concepts:**

  - **Schema:** The rigid blueprint that defines the structure of your tables, the columns they have, and the type of data each column holds (e.g., `TEXT`, `INTEGER`, `BOOLEAN`). You must define this *before* you can add data.

  - **Primary Key (**`id`**):** A unique identifier for each row in a table. No two rows can have the same primary key. This is how you can unambiguously find a specific record.

  - **Foreign Key (**`user_id`**):** A column in one table that refers to the Primary Key of another table. This is how you create relationships.

    ## Example: A Simple Blog

    Let's say we have two tables: `Users` and `Posts`.

    ### Users Table

    | id (Primary Key) | username | email                                         |
    | :--------------- | :------- | :-------------------------------------------- |
    | 1                | alice_k  | [alice@example.com](mailto:alice@example.com) |
    | 2                | bob_m    | [bob@example.com](mailto:bob@example.com)     |

    ### Posts Table

    | id (Primary Key) | title         | content               | user_id (Foreign Key → Users.id) |
    | :--------------- | :------------ | :-------------------- | :------------------------------- |
    | 101              | My First Post | Hello, world!         | 1                                |
    | 102              | Learning SQL  | It's fun!             | 1                                |
    | 103              | My Thoughts   | Today was a good day. | 2                                |

    ---

    The `user_id` in the `Posts` table creates a **one-to-many relationship**:

    **One user** can have **many posts**.

    To get all of Alice's posts, you would `JOIN` the tables on `Users.id = Posts.user_id`.

    ```sql
    SELECT Posts.*
    FROM Posts
    JOIN Users ON Users.id = Posts.user_id
    WHERE Users.username = 'alice_k';
    ```

### **NoSQL (Non-Relational) Databases In-Depth (20 mins)**

- **Analogy:** A physical filing cabinet. The cabinet is the **Database**. Each drawer is a **Collection** (e.g., "Users", "Posts"). Each file in a drawer is a **Document**. The best part? Each document can have a different structure.

- **Focus: Document Databases (e.g., MongoDB)**

  - **Collection:** A group of documents. Roughly equivalent to a SQL table.

  - **Document:** A JSON-like object (in MongoDB, it's BSON). It's a set of key-value pairs. There's no rigid schema, so one document can have different fields than another in the same collection.

- **Example: The Same Blog in MongoDB**

    `users` **Collection**

    ```json
    // Document 1
    {
      "_id": "ObjectId('abc')", // Primary key in MongoDB
      "username": "alice_k",
      "email": "alice@example.com"
    }
    // Document 2
    {
      "_id": "ObjectId('def')",
      "username": "bob_m",
      "email": "bob@example.com",
      "location": "Nairobi" // See? A flexible schema!
    }
    ```

`posts` Collection

```json
// Document 1
{
  "_id": "ObjectId('ghi')",
  "title": "My First Post",
  "content": "Hello, world!",
  "author_id": "ObjectId('abc')" // This is like a foreign key
}
```

Alternatively, you could **embed** the data for better read performance:

```javascript
// User Document with Embedded Posts
{
  "_id": "ObjectId('abc')",
  "username": "alice_k",
  "email": "alice@example.com",
  "posts": [
    { "title": "My First Post", "content": "Hello, world!" },
    { "title": "Learning SQL", "content": "It's fun!" }
  ]
}
```

### **A New Frontier: Vector Databases (for AI)**

- **Analogy (10 mins):** Imagine a library. A normal database is like the card catalog: you can find a book by its exact title or author (keyword search). A vector database is like a brilliant librarian. You can give them a book and ask, "Find me other books that have a similar *vibe* or cover similar themes." The librarian understands the *meaning* and *context*, not just the keywords.

- **Concept (10 mins):** Vector databases don't store text or images directly in a searchable way. Instead, they store a numerical representation of that data, called an **embedding** or **vector**.

  - An **embedding** is a list of numbers (e.g., `[0.12, -0.45, 0.89, ...]`) generated by an AI model (like one from OpenAI or Google).

  - The magic is that the AI model learns to create these numbers so that items with similar meanings have vectors that are "close" to each other in a multi-dimensional space.

  - The database's only job is to be incredibly fast at finding the "nearest neighbors" to a given vector.

- **How It Works (Semantic Search Example):**

    1. **Your Query:** You search for "How do I fix a car that won't start?"

    2. **Embedding:** An AI model converts your query into a vector: `[0.5, -0.2, 0.9, ...]`.

    3. **Database Search:** The vector database takes this query vector and searches through millions of other vectors to find the ones that are mathematically closest to it.

    4. **Result:** It might return a document that says, "Troubleshooting an engine ignition failure," because the AI model understands that "car won't start" and "engine ignition failure" are semantically the same concept.

- **Best For (5 mins):**

  - **Semantic Search:** Searching by meaning, not just keywords.

  - **Recommendation Engines:** "Users who liked this item (vector A) also liked these other items (vectors B, C, D that are close to A)."

  - **Image Search:** Finding visually similar images.

  - **Anomaly Detection:** Finding data points whose vectors are far away from all others.

- **Examples:** Pinecone, Weaviate, Chroma, Milvus.

### **Decision Checklist: SQL or NoSQL?**

| Factor                 | Ask Yourself...                                                  | Lean Towards SQL (PostgreSQL) If...                                                                                                 | Lean Towards NoSQL (MongoDB) If...                                                                                                       |
| :--------------------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Schema Flexibility** | Is my data structure well-defined and unlikely to change?        | Yes, your data fits neatly into tables (e.g., user profiles, financial records).                                                    | No, your data is unstructured, semi-structured, or evolves rapidly (e.g., product catalogs with varying attributes, social media posts). |
| **Data Relationships** | Are the relationships between my data complex and important?     | Yes, you have many interconnected pieces of data (e.g., students, courses, enrollments, grades). SQL `JOIN`s are powerful for this. | No, data is mostly self-contained or can be embedded. Relationships are simple (e.g., a blog post and its comments).                     |
| **Scalability**        | How do I expect my application to grow?                          | You can scale **vertically** (buy a bigger server). It's very powerful but can be expensive.                                        | You need to scale **horizontally** (add more, cheaper servers). NoSQL is generally built for this kind of distributed architecture.      |
| **Consistency**        | How critical is it that my data is 100% consistent at all times? | Absolutely critical (ACID compliance). You are building a banking or e-commerce app where transactions must be perfect.             | Eventual consistency is acceptable. It's okay if a new post takes a few moments to appear for all users (e.g., social media feeds).      |

## **Part 3: The Capstone Assignment**

### **Assignment: Design the Kamilimu Mini-Library**

"Your task is to design the software blueprint for a small library management system. You won't write all the code today, but you will do the most important part: the design."

**Step 1: The OOP Design (The Blueprint)**

- Design two classes in JavaScript: `Book` and `Member`.

- `Book` **Class:**

  - **Properties:** `title`, `author`, `isbn`, `isCheckedOut` (boolean), `borrower` (will hold a `Member` object).

  - **Methods:** `checkOut(member)`, `returnBook()`. The `checkOut` method should only work if the book is not already checked out.

- `Member` **Class:**

  - **Properties:** `name`, `memberId`, `borrowedBooks` (an array of `Book` objects).

  - **Methods:** `borrow(book)`, `return(book)`.

**Step 2: The Database Design (The Filing System)**

- **SQL Version:**

  - How would you design the tables for `Books` and `Members`?

  - What columns would each table have? What are their data types?

  - Which column is the Primary Key? How would you create a relationship between a checked-out book and a member (which table gets the Foreign Key)?

- **NoSQL (MongoDB) Version:**

  - How would you structure the `books` and `members` collections?

  - Would you embed data? For example, would you store the list of borrowed book titles inside the member document, or would you just store their IDs? Explain your choice.

**Bonus Challenge (Implementation)**

- Create a `Library` class that holds two arrays: `allBooks` and `allMembers`.

- Give it methods like `addBook(book)`, `addMember(member)`, and `findBookByTitle(title)`.

- Create a few `Book` and `Member` objects and simulate a member borrowing and returning a book, printing the status at each step.