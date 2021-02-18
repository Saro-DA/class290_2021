// pending
// pulfilled
// rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected!");
  }, 2000);
});

console.log(promise, " -- promise");

promise
  .then(data => {
    console.log(data, " --- inside then");
    return { data: 1 };
  })
  .then(data => {
    console.log(data, "second then");
  })
  .catch(err => {
    console.log(err, "-- inside error");
  })
  .catch(err => {
    console.log(err, "-- 2 inside error");
  });

let loading = true;
promise
  .then(data => {
    console.log(data, " --- inside then");
    return 1;
  })
  .then(function () {})
  .then(data => {
    console.log(data, " --- 1.5 inside then");
  })
  .catch(err => {
    console.log(err, "--- err");

    return Promise.reject("reject second time");
  })
  .then(err => {
    console.log("final then");
  })
  .catch(err => {
    console.log(err, "-- second catch");
    return Promise.reject("reject third time");
  })
  .catch(err => {
    console.log(err, "-- third catch");
  })
  .finally(() => {
    console.log("finally!");
    loading = false;
  });

promise.then(data => {
  setTimeout(() => {
    console.log(data, " --- second inside then");
  }, 2000);
});
