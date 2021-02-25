const express = require('express');
const app = express();
const users = require('./users/users.controller');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/users', users);

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}. 🚀`);
})