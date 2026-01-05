function createUser(name, role = "User") {
  return { name, role };
}

console.log(createUser("Prakash"));

// { name: 'Prakash', role: 'User' }

console.log(createUser("Prakash", undefined));

// { name: 'Prakash', role: 'User' }

console.log(createUser("Prakash", null));

// { name: 'Prakash', role: null }





