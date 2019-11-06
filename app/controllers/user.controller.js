const User = require('../models/UserSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
    if(!req.body.password || !req.body.email) {
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
    user.password = await bcrypt.hash(user.password, 8)

    user.save()
    .then(data => {
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

exports.findOne = async (req, res) => {
    if(!req.body.password || !req.body.email) {
        return res.status(400).send({
            message: "All fields should be filled"
        });
    }
        const email = req.body.email
        User.findOne({email})
        .then(user => {
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
            if (!isPasswordMatch) {
                throw new Error({ error: 'Invalid login credentials' })
            }
            res.send(user)
        })
        .catch(err => {
            res.send(err.message)
        })
};

/*exports.update = (req, res) => {

};*/

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};