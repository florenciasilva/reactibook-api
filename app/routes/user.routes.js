module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/newUser', users.create);
    app.get('/allUsers', users.findAll);
    app.post('/user/:userEmail', users.findOne);
    app.put('/addFriend/:userEmail', users.update);
    app.delete('/deleteUser/:userId', users.delete);
};