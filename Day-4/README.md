# Day 04 – Scope, Hoisting & Closures 🔍

## 📌 Focus
Understanding how JavaScript executes code internally by mastering
scope, hoisting behavior, and closures.

---

## 🧠 Topics Covered
- Global, Function, and Block Scope
- Variable Shadowing
- Hoisting (`var` vs `let`)
- Temporal Dead Zone (TDZ)
- Closures and Lexical Scope

---

## ✅ Tasks

### 🔹 Task 1: Scope & Variable Shadowing
- Analyzed how variables behave in different scopes
- Observed block-level and function-level scoping
- Predicted output without running the code

**Key Learnings:**
- `let` and `const` are block scoped
- Variables with the same name can exist in different scopes
- Inner scope variables shadow outer scope variables

---

### 🔹 Task 2: Hoisting Behavior
- Compared hoisting of `var` and `let`
- Identified runtime errors caused by the Temporal Dead Zone

**Key Learnings:**
- `var` is hoisted and initialized with `undefined`
- `let` is hoisted but not initialized (TDZ)
- Accessing `let` before declaration throws an error

---

### 🔹 Task 3: Closures (Hands-on Implementation)
- Implemented a counter using closures
- Maintained private state without global variables
- Created multiple independent counters

**Key Learnings:**
- Closures allow functions to remember outer variables
- Each function call creates a new lexical environment
- Closures enable data privacy and state preservation

---

## 📂 Files
- `task-1.js` → Scope and shadowing example
- `task-2.js` → Hoisting and TDZ behavior
- `task-3.js` → Closure-based counter implementation

---

## 🎯 Outcome
- Strong understanding of JavaScript execution context
- Ability to debug scope and hoisting issues
- Clear grasp of closures for real-world use cases

---
