const {one, two, three} = require("./api");

Promise.all([one(), two(), three()])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    // as soon as any of the promises rejects, it falls to the catch function.
    console.log(error);
})

Promise.race([one(), two(), three()])
.then(result => {
    console.log(result);
})