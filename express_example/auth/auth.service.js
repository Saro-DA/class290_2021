const userService = require('../users/users.service');
const jwt = require('jsonwebtoken');

class AuthService {
    async login(username, password) {
        const user = await userService.validate(username, password);

        return jwt.sign({
            userId: user._id, username: user.username
        },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN
        });

    }
}

module.exports = new AuthService();