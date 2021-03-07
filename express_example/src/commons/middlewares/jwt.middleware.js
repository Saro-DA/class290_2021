const jwt = require('jsonwebtoken');
const { isPublicPath } = require('../util');
const { Forbidden } = require('http-errors');

module.exports = {
    parse(req, res, next) {
        if (!isPublicPath(req.path, req.method)) {
            parseToken(req);
        }

        next();
    }
}

function parseToken(req) {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const user = jwt.verify(token, process.env.JWT_SECRET, {
            ignoreExpiration: false
        })

        req.user = user;
    } catch (err) {
        throw new Forbidden();
    }
}