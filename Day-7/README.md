# Day 07 – `this`, `call`, `apply`, `bind` 🔗

## 📌 Focus
Understanding how `this` works in JavaScript and learning how to
explicitly control it using `call`, `apply`, and `bind`.

---

## 🧠 Topics Covered
- `this` keyword in different execution contexts
- Global scope vs function scope vs method scope
- Arrow functions vs normal functions (`this` behavior)
- `call()`, `apply()`, and `bind()`
- Common `this`-related bugs in callbacks

---

## ✅ Tasks

### 🔹 Task 1: `this` in Different Contexts
- Observed how `this` behaves in:
  - Global scope
  - Normal function calls
  - Object method calls

**Key Learnings:**
- `this` depends on how a function is called
- In Node.js, top-level `this` is an empty object
- Method calls bind `this` to the object before the dot

---

### 🔹 Task 2: Arrow vs Normal Functions
- Compared `this` behavior in arrow functions and normal methods

**Key Learnings:**
- Arrow functions do not have their own `this`
- Arrow functions inherit `this` from their lexical scope
- Normal methods bind `this` to the calling object

---

### 🔹 Task 3: Method Borrowing with `call()`
- Used `call()` to reuse a method for another object

**Key Learnings:**
- `call()` invokes a function immediately
- First argument explicitly sets `this`

---

### 🔹 Task 4: Argument Passing with `apply()`
- Used `apply()` to pass arguments as an array

**Key Learnings:**
- `apply()` works like `call()` but accepts arguments as an array
- Useful when arguments are already in array form

---

### 🔹 Task 5: Permanent Binding with `bind()`
- Created a new function with permanently bound `this`

**Key Learnings:**
- `bind()` does not execute the function
- Returns a new function with fixed `this`
- Commonly used in callbacks and event handlers

---

## 🧠 Bonus: `this` Lost in Callbacks
- Identified a common bug where `this` is lost inside `setTimeout`

**Key Learnings:**
- Regular functions inside callbacks lose object context
- Can be fixed using arrow functions or storing `this` in a variable

---

## 📂 Files
- `task-1.js` → `this` in different contexts
- `task-2.js` → Arrow vs normal functions
- `task-3.js` → Using `call()`
- `task-4.js` → Using `apply()`
- `task-5.js` → Using `bind()`

---

## 🎯 Outcome
- Strong understanding of how `this` works in JavaScript
- Ability to fix and prevent common `this`-related bugs
- Confidence with interview questions on `call`, `apply`, and `bind`

---


