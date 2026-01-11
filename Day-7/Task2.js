const user = {
  name: "Prakash",
  arrow: () => {
    console.log(this.name);
  },
  normal() {
    console.log(this.name);
  }
};

user.arrow();
user.normal();


//Output

// undefined
// Prakash
