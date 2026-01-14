# Day 09 – Promises & Error Handling 🔗

## 📌 Focus
Deep understanding of JavaScript Promises, execution flow, chaining,
and proper error handling for real-world asynchronous code.

---

## 🧠 Topics Covered
- Promise states (pending, fulfilled, rejected)
- Promise executor behavior
- Synchronous vs asynchronous execution
- Promise chaining
- Error propagation in Promises
- `.then()` and `.catch()` best practices

---

## ✅ Tasks

### 🔹 Task 1: Promise Execution Flow
- Observed how Promise executors run synchronously
- Analyzed execution order of logs inside and outside Promises

**Key Learnings:**
- Promise executor runs immediately
- `resolve()` does not stop code execution
- `.then()` callbacks run asynchronously (microtasks)

---

### 🔹 Task 2: Promise Chaining
- Passed values through multiple `.then()` calls
- Observed how resolved values flow through the chain

**Key Learnings:**
- Each `.then()` receives the previous resolved value
- Promise chaining enables readable async logic
- Returned values are automatically wrapped in Promises

---

### 🔹 Task 3: Error Handling with Promises
- Created a Promise that resolves or rejects randomly
- Handled errors using `.catch()`

**Key Learnings:**
- Rejected Promises must always be handled
- `.catch()` prevents unhandled promise rejections
- Error handling is critical in production code

---

## 🧠 Bonus: Error Propagation
- Thrown errors inside `.then()` are treated as rejected Promises

**Key Learnings:**
- Errors skip remaining `.then()` calls
- Control flows directly to `.catch()`

---

## 📂 Files
- `task-1.js` → Promise execution flow
- `task-2.js` → Promise chaining
- `task-3.js` → Promise creation with error handling

---

## 🎯 Outcome
- Strong understanding of Promise behavior
- Ability to debug asynchronous issues
- Confidence with interview questions on Promises

---

