const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    username:  {type: String},
    email: {
        type: String,
        required: true,
        index: { unique: true },
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password:  {type: String, minLength: 8, required: true},
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    friends: Array
});

module.exports = mongoose.model('User', UserSchema);