# Reactibook API

Made with NodeJS, Express and Mongoose. Hosted with Heroku

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

## Endpoints

### Posts

`POST /post` -> Post addition in MongoDB Atlas Cluster
Expects `username, email, content, privacy y friends`.

`GET /posts` -> Get all posts from database

`PUT /edit/:postId` -> Edit a given post. Expects `_id y content`

`DELETE /delete/:postId` -> Delete a given post.  Expects `_id`

### Usuarios

`POST /newUser` -> User addition in MongoDB Atlas Cluster. 
Expects `username, email, content y password`.

`GET /allUsers` -> Get all users from data base

`POST /user/:userEmail` -> Get a specific user. Expects `email y password`

`PUT /addFriend/:userEmail` -> Adds a 'friend' to a specific users friend's list (WIP). Expects `_id y email`.



`DELETE /deleteUser/:userId` -> Delete a specific user. Expects `_id`


## Boilerplate
```
./reactibook-api
│
├── app
│      ├── controllers
│      │     ├── post.controller.js
│      │     └── user.controller.js
│      ├── routes
│      │     ├── post.routes.js
│      │     └── user.routes.js
│      ├── models
│      │     ├── PostSchema.js
│      └──   └── UserSchema.js
│
├──  .gitignore
├──  index.js
├──  database.config.js
└──  package.json
```


## Uso

1. `Fork` this repo.
2. `git clone https://github.com/<your-username>/reactibook-api.git`
3. Add your environmental variables in a new `.env`. You need to connect to a MongoDB cluster or a local Mongo server (`DB_CONNECTION`), and add a placeholder for JSON Web Tokens (`JWT_KEY`).
4. `npm install`
5. `npm start` fires up a local server in `localhost:3000`. This will create an Express server and will also connect you to your data base. Runs with `nodemon`, so it includes hot-reload.


## Dependencies

   * "bcryptjs": "^2.4.3",
   * "body-parser": "^1.19.0",
   * "cors": "^2.8.5",
   * "dotenv": "^8.2.0",
   * "express": "^4.17.1",
   * "jsonwebtoken": "^8.5.1",
   * "mongoose": "^5.7.7",
   * "nodemon": "^1.19.4",
   * "validator": "^12.0.0"
