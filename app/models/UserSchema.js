const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:  {type: String, required: true, index: { unique: true }},
    email: {type: String, required: true, index: { unique: true }},
    password:  {type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);