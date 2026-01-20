function taskA() {
  return new Promise(res => setTimeout(() => res("A"), 1000));
}

function taskB() {
  return new Promise(res => setTimeout(() => res("B"), 1000));
}


async function sequential() {
  const a = await taskA();
  const b = await taskB(); 
  console.log(a, b);
}

sequential();
