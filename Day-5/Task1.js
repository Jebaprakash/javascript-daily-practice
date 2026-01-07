const users = [
  { name: "A", age: 18 },
  { name: "B", age: 2 },
  { name: "C", age: 1 }
];

for (let i = 0; i < users.length; i++) {
  let age = users[i].age
  
 if(age <18){
   users[i].IsAdult=false
 }
 else{
   users[i].IsAdult=true
 }
}

console.log(users)

