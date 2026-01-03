const values = [0, "0", "", null, undefined, [], {}];

 values.forEach(v => {
     if(v){
    console.log("TRUE",v)
     }else{
    console.log("False",v)
    }
 });
