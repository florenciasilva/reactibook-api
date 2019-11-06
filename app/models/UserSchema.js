const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    username:  {type: String, required: true, index: { unique: true }},
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
    }]
});



/*UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

*/
module.exports = mongoose.model('User', UserSchema);