const express = require('express');
const authService = require('./auth.service');
const router = express.Router();
const asyncHandler = require('express-async-handler');

router.post('/login', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
}))

module.exports = router;