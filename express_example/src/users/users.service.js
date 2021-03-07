const { NotFound } = require('http-errors');
const User = require('./user.entity');
const bcrypt = require('bcrypt')
const { Unauthorized } = require('http-errors');

class UserService {
    create(payload) {
        const user = new User(payload);
        return user.save();
    }

    findAll(query) {
        return User.find().exec();
    }

    async findOne(id) {
        const user = await User.findById(id).exec();
        if (!user) {
            throw new NotFound(`User with id ${id} not found.`);
        }
        return user;
    }

    async delete(id) {
        const user = await this.findOne(id);
        return user.remove();
    }

    async update(id, payload) {
        let user = await this.findOne(id);

        user = Object.assign(user, payload);

        return user.save();
    }

    async validate(username, password) {
        let user = await User.findOne({ username }).exec();
        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new Unauthorized();
        }

        return user;
    }
}

module.exports = new UserService();