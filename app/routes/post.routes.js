module.exports = (app) => {
    const posts = require('../controllers/posts.controller.js');

    app.post('/post', posts.create);
    app.get('/posts', posts.findAll);
    app.put('/edit/:postId', posts.update);
    app.delete('/delete/:postId', posts.delete);
};