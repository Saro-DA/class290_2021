const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../users/user.entity');

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    creator: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    }
}, { collection: 'posts' });

module.exports = mongoose.model('Post', schema);