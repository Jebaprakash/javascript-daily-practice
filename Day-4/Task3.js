function createCounter(){
   let a =0;
    
    return function(){
      a++;
      console.log(a)
      return a;
      
    }
  
}

const count = createCounter()
count()
count()