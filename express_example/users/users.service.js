
const users = [];

module.exports = {
    findAll(query) {
        return users;
    },

    create(user) {
        users.push(user);
        return user;
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