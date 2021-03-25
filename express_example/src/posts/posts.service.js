const Post = require('./post.entity');
const users = require('../users/users.service');

class PostService {
    async createPost(creator, payload) {
        const user = await users.findOne(creator.userId);

        const post = {
            ...payload,
            creator: user
        }

        const dbPost = new Post(post);
        return dbPost.save();
    }

    async findAll(user, query) {
        const filter = {};

        if (user.role !== 'admin') {
            filter.creator = user.userId;
        }

        return Post.find(filter)
            .populate('creator', {
                password: false
            })
            .exec();
    }
}

module.exports = new PostService();