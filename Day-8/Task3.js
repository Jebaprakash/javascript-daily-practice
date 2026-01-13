async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(0);
test();
console.log(3);
``