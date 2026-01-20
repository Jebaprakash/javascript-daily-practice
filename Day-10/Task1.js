function getNumber() {
  return Promise.resolve(10);
}

getNumber()
  .then(n => n * 2)
  .then(n => console.log(n));



  async function getNum() {
     let a = await getNumber();
     console.log(a*2);

  }

  getNum()