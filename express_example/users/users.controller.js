const express = require('express');
const router = express.Router();
const users = require('./users.service');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', new Date());
    next();
})

router.get('/about', (req, res) => {
    res.send("Users about.");
})

router.get('/', (req, res) => {
    const query = req.query;
    const result = users.findAll(query);
    res.json(result);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const result = users.findOne(id);
    res.json(result);
})

router.post('/', (req, res) => {
    const body = req.body;
    const result = users.create(body);
    res.json(result);
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const result = users.delete(id);
    res.json(result);
})

module.exports = router;