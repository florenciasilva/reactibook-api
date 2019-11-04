module.exports = (app) => {
    const posts = require('../controllers/posts.controller.js');

    app.post('/post', posts.create);
    app.get('/posts', posts.findAll);
    app.get('/posts/:postId', posts.findOne);
    app.put('/edit/:postId', posts.update);
    app.delete('/delete/:postId', posts.delete);
};