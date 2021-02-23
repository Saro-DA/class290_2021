const express = require('express');

const router = express.Router();

const bands = [];

router.get('/', (req, res) => {
    const query = req.query;
    console.log(query);

    const result = bands.filter((band) => {
        return band.name.startsWith(query.name || '');
    })

    res.json(result);
})

router.post('/', (req, res) => {
    const band = req.body;
    console.log(band);
    bands.push(band);
    res.json(band);
})

router.get('/about', (req, res) => {
    res.send("About bands");
})

module.exports = router;