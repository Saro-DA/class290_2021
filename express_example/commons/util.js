const fs = require('fs');
const mongoose = require('mongoose');

module.exports = {
    writeInFile(content) {
        return new Promise((resolve) => {
            fs.writeFile('content.txt', content, { encoding: 'utf-8' }, () => {
                resolve();
            });
        })
    },

    readFromFile() {
        return new Promise((resolve, reject) => {
            fs.readFile('content.txt', (err, data) => {
                if (err) {
                    return reject(err);
                }

                resolve(data);
            });
        });
    },

    getModel(modelName, modelSchema) {
        if (mongoose.modelNames().includes(modelName)) {
            return mongoose.model(modelName)
        }
        return mongoose.model(modelName, modelSchema);
    }
}