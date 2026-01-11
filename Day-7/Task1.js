console.log(this);

function normalFunc() {
  console.log(this);
}

const obj = {
  name: "JS",
  method() {
    console.log(this.name);
  }
};

normalFunc();
obj.method();


//output
// {}
// global object
// JS
