let x = 10;

function testScope() {
  let x = 20;

  if (true) {
    let x = 30;
    console.log("Inside block:", x); //30
  }

  console.log("Inside function:", x); //20
}

testScope();
console.log("Global scope:", x); //10


