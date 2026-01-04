console.log(0 == false);        // true
// Explanation: false is coerced to 0 → 0 == 0

console.log(0 === false);      // false
// Explanation: number !== boolean (no type coercion)

console.log("" == false);      // true
// Explanation: "" → 0, false → 0 → equal

console.log("" === false);     // false
// Explanation: string !== boolean

console.log(null == undefined); // true
// Explanation: special case in JS (only equals each other)

console.log(null === undefined); // false
// Explanation: different types
