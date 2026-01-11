const person1 = {
  name: "Prakash",
  greet() {
    console.log("Hello " + this.name);
  }
};

const person2 = {
  name: "Jeba"
};

person1.greet.call(person2);
