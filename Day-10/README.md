# Day 10 – Async / Await Patterns & Best Practices ⚡

## 📌 Focus
Writing clean, readable, and efficient asynchronous JavaScript using
`async` / `await`, with proper error handling and performance awareness.

---

## 🧠 Topics Covered
- `async` / `await` syntax
- Converting `.then()` chains to `async/await`
- Error handling using `try / catch`
- Sequential vs parallel async execution
- `Promise.all()` for performance optimization
- Async function return behavior

---

## ✅ Tasks

### 🔹 Task 1: `.then()` vs `async/await`
- Rewrote Promise-based code using `async/await`
- Compared readability and control flow

**Key Learnings:**
- `async/await` makes asynchronous code look synchronous
- Improves readability and debugging
- Reduces deeply nested `.then()` chains

---

### 🔹 Task 2: Error Handling with `try / catch`
- Handled Promise rejection using `try / catch`
- Printed success and error messages clearly

**Key Learnings:**
- Rejected Promises throw errors when awaited
- `try / catch` is the recommended way to handle async errors
- Cleaner than `.then().catch()` for complex logic

---

### 🔹 Task 3: Sequential vs Parallel Execution
- Executed async tasks sequentially using multiple `await`
- Executed async tasks in parallel using `Promise.all()`

**Key Learnings:**
- Sequential execution waits for each task to finish
- Parallel execution runs tasks concurrently
- `Promise.all()` significantly improves performance for independent tasks

---

## 🧠 Bonus: Async Function Return Value
- Observed that `async` functions always return a Promise

**Key Learnings:**
- Returning a value inside `async` is equivalent to `Promise.resolve(value)`
- Must use `.then()` or `await` to access the resolved value

---

## 📂 Files
- `task-1.js` → Async/await rewrite
- `task-2.js` → Error handling with `try/catch`
- `task-3.js` → Sequential vs parallel execution

---

## 🎯 Outcome
- Ability to write clean and maintainable async code
- Proper handling of async errors
- Improved performance awareness in asynchronous operations
- Strong preparation for interview questions on async JavaScript

---

