const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    username: String,
    content: String,
    email: String,
    likes: Number,
    privacy: Boolean,
    friends: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);