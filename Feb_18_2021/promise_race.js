// Promise.race

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved!");
    resolve(10);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved!");
    reject(20);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved!");
    resolve(30);
  }, 4000);
});

Promise.race([p1, p2, p3])
  .then(data => {
    console.log(data, "--- data in then");
  })
  .catch(err => {
    console.log(err, "--- err in catch");
  });
