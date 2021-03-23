const Post = require('./post.entity');
const users = require('../users/users.service');

class PostService {
    async createPost(creator, payload) {
        const user = await users.findOne(creator.userId);

        const post = {
            ...payload,
            creatorId: user
        }

        const dbPost = new Post(post);
        return dbPost.save();
    }
}

module.exports = new PostService();