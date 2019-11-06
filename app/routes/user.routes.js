module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/newUser', users.create);
    app.get('/allUsers', users.findAll);
    app.get('/user/:userId', users.findOne);
    //app.put('/editUser/:userId', users.update);
    app.delete('/deleteUser/:userId', users.delete);
};