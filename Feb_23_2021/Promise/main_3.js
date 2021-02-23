const {one, two, three} = require("./api");


async function run() {
    try {
        const result1 = await one();
        console.log(result1);

        const result2 = await two();
        console.log(result2);

        const result3 = await three();
        console.log(result3);


        /*one();
        two();
        three();*/
        // in this case, one, two and three are being called without waiting
        // for resolve of each.

    } catch(error) {
        console.log(error);
    }
}

run();
console.log("here is the code");
