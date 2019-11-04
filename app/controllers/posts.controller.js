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

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};