require('dotenv').config();
require('./db-connection');
const express = require('express');
const app = express();
const users = require('./users/users.controller');
const bodyParser = require('body-parser');
const { writeInFile, readFromFile } = require('./commons/util')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/users', users);

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/createfile', async (req, res) => {
    await writeInFile(req.body.content);
    res.send("File created successfully.");
})

app.get('/readfile', async (req, res) => {
    try {
        const data = await readFromFile();
        res.send(data);
    } catch (err) {
        res.status(500).send("There was an error reading the file.");
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}. 🚀`);
})