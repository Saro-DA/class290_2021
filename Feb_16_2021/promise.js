


const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // reject('there was a problem');
        resolve('operaton was OK!');
    }, 4000);
})

function callback(result) {
    console.log(result);
}

function handleError(error) {
    console.log(error);
}

function finallyHandler() {
    console.log("here is finally");
}

promise
.then(callback)
.then(() => {
    return Promise.reject("then 2 not OK!");
})
.then((param) => {
    console.log("then 3");
    console.log(param);
})
.catch(handleError)
.finally(finallyHandler);

console.log("something else comes meanwhile");
