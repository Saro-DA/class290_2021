const express = require('express');
const router = express.Router();
const posts = require('./posts.service');
const asyncHandler = require('express-async-handler');

router.post('/', asyncHandler(async (req, res) => {
    const post = await posts.createPost(req.user, req.body);
    res.status(201).json(post);
}))

module.exports = router;