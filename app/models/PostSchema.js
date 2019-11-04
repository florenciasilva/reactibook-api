const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    user: String,
    content: String,
    likes: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);