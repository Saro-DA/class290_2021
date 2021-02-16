

function fetchDataFromRemote(query, data, callback) {
    console.log(`Processing the remote call for "${query}" with ${data}`);
    setTimeout(() => {
        // the first parameter of a callback usually is an error object.
        // and the second parameter of a callback is the result data.
        // if there is no error, the first parameter must be null.

        // if the file doesn't exist
        if(data && data.error) {
            callback({error: "there was a problem in your data"});
            return;
        }

        callback(null, {data: {id: 123, username: "johndoe", password: "abc", email: "example@example.com"}});
    }, 4000);
}

module.exports = {
    fetchDataFromRemote
}