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

router.get('/', async (req, res) => {
    try {
        const query = req.query;
        const result = await users.findAll(query);
        res.json(result);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const result = users.findOne(id);
    res.json(result);
})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const result = await users.create(body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const result = users.delete(id);
    res.json(result);
})

module.exports = router;