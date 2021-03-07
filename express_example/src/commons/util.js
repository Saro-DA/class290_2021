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
    },

    isPublicPath(path, method) {
        console.log(`is public ${path} ${method}`);
        const publicPaths = [
            '/auth/login',
            { path: '/users', method: 'POST' }
        ]

        return publicPaths.some(obj => {
            if (typeof (obj) === 'string') {
                return obj === path;
            }

            return obj.path === path && obj.method === method;
        })
    }
}