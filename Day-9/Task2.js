function step1(val) {
  return Promise.resolve(val + 1);
}

function step2(val) {
  return Promise.resolve(val * 2);
}

function step3(val) {
  return Promise.resolve(val - 3);
}

step1(5)
  .then(step2)
  .then(step3)
  .then(result => console.log(result));
