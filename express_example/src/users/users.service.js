const { NotFound } = require('http-errors');
const User = require('./user.entity');

class UserService {
    create(payload) {
        const user = new User(payload);
        return user.save();
    }

    findAll(query) {
        const { offset, limit, sort, asc } = query;

        const sortObj = {};
        sortObj[sort] = asc === 'true' ? 'asc' : 'desc';

        return User.find({}, { password: false })
            .skip(+offset)
            .limit(+limit)
            .sort(sortObj)
            .exec();
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
}

module.exports = new UserService();