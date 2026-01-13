# Day 08 – Call Stack, Event Loop & Async JavaScript 🔄

## 📌 Focus
Understanding how JavaScript executes synchronous and asynchronous code
using the call stack, event loop, and task queues.

---

## 🧠 Topics Covered
- JavaScript Call Stack
- Synchronous vs Asynchronous execution
- Event Loop
- Microtask Queue (Promises)
- Macrotask Queue (`setTimeout`)
- `async` / `await` internals

---

## ✅ Tasks

### 🔹 Task 1: Call Stack Execution
- Predicted execution order of nested function calls
- Traced how functions are pushed and popped from the call stack

**Key Learnings:**
- JavaScript executes synchronous code using a stack
- Functions must finish before control returns to the caller

---

### 🔹 Task 2: Event Loop Priority
- Analyzed execution order involving `setTimeout` and Promises

**Key Learnings:**
- Microtasks always run before macrotasks
- Promises (`then`, `await`) use the microtask queue
- `setTimeout` callbacks run after microtasks

---

### 🔹 Task 3: `async` / `await` Behavior
- Observed how `await` pauses function execution
- Understood how execution resumes via the microtask queue

**Key Learnings:**
- `await` does not block the main thread
- Async functions resume execution asynchronously

---

## 🧠 Bonus: Common Async Bug
- Investigated `setTimeout` behavior inside loops using `var`

**Key Learnings:**
- `var` is function-scoped and causes shared state issues
- `let` and closures fix asynchronous loop bugs

---

## 📂 Files
- `task-1.js` → Call stack execution example
- `task-2.js` → Event loop and task queue order
- `task-3.js` → Async/await execution flow

---

## 🎯 Outcome
- Strong mental model of JavaScript execution
- Ability to debug asynchronous behavior confidently
- Prepared for interview questions on event loop and async code

---


