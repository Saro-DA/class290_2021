const express = require('express');
const bodyParser = require('body-parser');

const cars = require('./cars');
const bands = require('./bands');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use('/cars', cars);
app.use('/bands', bands);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running! 🚀 Listening to port ${port}.`);
});