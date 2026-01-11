function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const user = { name: "Prakash" };

introduce.apply(user, ["Chennai", "India"]);
