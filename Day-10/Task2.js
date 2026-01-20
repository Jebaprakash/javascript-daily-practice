function mayFail() {
  return new Promise((resolve, reject) => {
    const ok = Math.random() > 0.5;
    setTimeout(() => {
      ok ? resolve("Success") : reject("Failed");
    }, 500);
  });
}
  


async function runTask() {
  try {
    const result = await mayFail(3);
    console.log("Result:", result);
  } catch (err) {
    console.log("Error:", err);
  }
}

runTask();
