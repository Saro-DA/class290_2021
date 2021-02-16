
const fs = require('fs');


fs.readFile('./content.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err) {
        console.log("there was an error");
        console.error(err);
        return;
    }

    console.log("Original content of the file:");
    console.log(data);

    const cap = data.toUpperCase();

    fs.writeFile('./upper.txt', cap, () => {
        console.log("file created successfully!");

        fs.readFile('./upper.txt', {encoding: 'utf-8'}, (err, data) => {
            if(err) {
                console.log("there was an error");
                console.error(err);
                return;
            }
        
            console.log("Content of the upper.txt file:");
            console.log(data);
        })
    })
})