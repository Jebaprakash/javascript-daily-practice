function updateUser(user, field, value) {
  // implement
  return {
    ...user
    [field]=value
  }
    
  
}

const user = { name: "Prakash", age: 22 };

updateUser(user, "age", 23);
updateUser(user, "city", "Chennai");

console.log(user)