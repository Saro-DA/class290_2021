const express = require('express');

const router = express.Router();

const cars = [];

router.get('/', (req, res) => {
    res.json(cars);
})

router.get('/about', (req, res) => {
    res.send("About cars");
})

module.exports = router;