function func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("after 2 seconds");
      resolve("Resolved!");
    }, 2000);
  });
}

// we can also use .then
func().then(data => {
  console.log(data, "-- in then");
});

function func2(prevResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("after 3 seconds");
      resolve(`${prevResult} second time`);
    }, 3000);
  });
}

async function asyncFunc() {
  console.log("calling the function");
  try {
    const result = await func();
    console.log(result, "--- result");
    const result2 = await func2(result);
    console.log(result2, "--- result2");
  } catch (err) {
    console.log(err, "- err");
  }
}

asyncFunc();
