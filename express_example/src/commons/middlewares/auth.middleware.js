const { Forbidden } = require('http-errors');
const { validateToken } = require('../../auth/auth.service');

const jwtMiddleware = (req, res, next) => {
    let token;
    try {
        token = req.header('Authorization').split(' ')[1];
        const user = validateToken(token);
        req.user = user;
    } catch (err) {
        return next(new Forbidden());
    }

    next();
}

jwtMiddleware.unless = require('express-unless');

module.exports = {
    jwtMiddleware
}