

const { fetchDataFromRemote } = require('./utils');



fetchDataFromRemote('from users', {username: "johndoe" /*,error: true*/}, (error, result) => {
    if(error) {
        console.log("there was an error on the server");
        console.error(error);
        return;
    }

    const {data: {password, ...rest}} = result;

    console.log(rest);
})


console.log("Doing something else...");