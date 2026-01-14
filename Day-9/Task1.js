const p = new Promise((resolve, reject) => {
  console.log("A");
  resolve("B");
  console.log("C");
});

p.then(res => console.log(res));
console.log("D");
