const Post = require('../models/PostSchema.js');

exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Posts cannot be empty"
        });
    }

    const post = new Post({
        user: req.body.user || "No name",
        content: req.body.content
    });

    post.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating your post."
        });
    });
};

exports.findAll = (req, res) => {
    Post.find()
    .then(allPosts => {
        res.send(allPosts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Post content can not be empty"
        });
    }

    Post.findByIdAndUpdate(req.params.postId, {
        content: req.body.content
    }, {new: true})
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        res.send(post);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        return res.status(500).send({
            message: "Error updating Post with id " + req.params.postId
        });
    });
};

exports.delete = (req, res) => {

};