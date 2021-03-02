const fs = require('fs');

module.exports = {
    writeInFile(content, callback) {
        fs.writeFile('content.txt', content, {encoding: 'utf-8'}, callback);
    },

    readFromFile(callback) {
        fs.readFile('content.txt', callback);
    }
}