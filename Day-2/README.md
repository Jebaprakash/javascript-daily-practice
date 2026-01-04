# Day 02 – JavaScript Operators & Edge Cases ⚙️

## 📌 Focus
Understanding JavaScript comparison and logical operators by exploring
real-world edge cases and common bugs.

---

## 🧠 Topics Covered
- Equality Operators (`==` vs `===`)
- Type Coercion
- Logical Operators (`&&`, `||`)
- Short-Circuit Evaluation
- Truthy & Falsy Pitfalls

---

## ✅ Tasks

### 🔹 Task 1: Equality Trap
- Compared loose (`==`) and strict (`===`) equality
- Observed how JavaScript performs implicit type coercion

**Key Learnings:**
- `==` performs type conversion, which can lead to unexpected results
- `===` compares both value and type and is safer for most use cases
- `null == undefined` is a special case in JavaScript

---

### 🔹 Task 2: Logical Operators & Short-Circuiting
- Evaluated expressions using `&&` and `||`
- Understood how JavaScript returns actual values, not booleans

**Key Learnings:**
- `&&` returns the first falsy value or the last truthy value
- `||` returns the first truthy value
- Logical operators are commonly used in authentication and fallback logic

---

### 🔹 Task 3: Bug Fix – Falsy Value Issue
- Identified a bug caused by treating `0` as falsy
- Fixed the logic to correctly handle valid zero values

**Key Learnings:**
- Do not rely on truthy/falsy checks for numeric values
- Always validate input explicitly (`undefined`, `null`, etc.)

---

## 📂 Files
- `task-1.js` → Equality operator comparisons
- `task-2.js` → Logical operator evaluation
- `task-3.js` → Bug fix for falsy value handling

---

## 🎯 Outcome
- Stronger understanding of JavaScript internals
- Improved ability to debug real-world JavaScript bugs
- Better preparation for technical interviews

---
