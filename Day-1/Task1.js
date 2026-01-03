function GetUser(){
    const {
        name ,
        age = 18,
        country = "India",
        Skills = []
      }  = user ; 
   console.log("Name",name);
   console.log("age",age);
   console.log("Skills",Skills.join(","));
   console.log("Country",country);
    
}
 const user = { 
        name : "Jeba",
        Skills : ["Node", "Nest"],
        age :20
}

GetUser(user)