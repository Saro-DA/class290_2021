// gets resolved if every input has resolved
// gets rejected if any of the promises is rejected

// Promise.all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved!");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected!");
    reject(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved!");
    reject(30);
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then(data => {
    console.log(data, "--- data in then");
  })
  .catch(err => {
    console.log(err, "--- err in catch");
  });
