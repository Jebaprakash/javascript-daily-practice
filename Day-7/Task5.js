const employee = {
  name: "Prakash"
};

function printName() {
  console.log(this.name);
}

const boundFn = printName.bind(employee);
boundFn();
