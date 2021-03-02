const User = require('./user.entity');

module.exports = {
    create(payload) {
        const user = new User(payload);
        return user.save();
    },

    findAll(query) {
        return User.find().exec();
    },

    findOne(id) {
        return users.find((user) => {
            return user.id === id;
        })
    },

    delete(id) {
        return `Deleted user ${id} from the list.`;
    }

}