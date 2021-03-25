const express = require('express');
const router = express.Router();
const posts = require('./posts.service');
const asyncHandler = require('express-async-handler');

router.post('/', asyncHandler(async (req, res) => {
    const post = await posts.createPost(req.user, req.body);
    res.status(201).json(post);
}))

router.get('/', asyncHandler(async (req, res) => {
    const result = await posts.findAll(req.user, req.query);
    res.json(result);
}))

module.exports = router;