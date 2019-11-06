const User = require('../models/UserSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    console.log('que esta pasanda')
    if(!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).send({
            message: "All fields should be filled"
        });
    }
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    

    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})

    user.save()
    .then(data => {
        if (user.isModified('password')) {
            user.password = bcrypt.hash(user.password, 8)
        }
        const userData = {data, token}
        res.send(userData);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating your account."
        });
    });
};

exports.findAll = (req, res) => {

};

exports.findOne = (req, res) => {

};

/*exports.update = (req, res) => {

};*/

exports.delete = (req, res) => {

};