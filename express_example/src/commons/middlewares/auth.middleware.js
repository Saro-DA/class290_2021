const { Forbidden } = require('http-errors');
const { validateToken } = require('../../auth/auth.service');

module.exports = {
    jwtMiddleware(req, res, next) {
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
}