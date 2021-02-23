const {one, two, three} = require("./api");


one()
.then((result) => {
    console.log(result);
    return two();
})
.then((result) => {
    console.log(result);
    return three();
})
.then((result) => {
    console.log(result);
})