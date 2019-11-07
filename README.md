# Reactibook API

Creada con NodeJS, Express y Mongoose, hosteada en Heroku

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

https://reactibook-api.herokuapp.com/

## Endpoints

### Posts

`POST /post` -> Creación de post en MongoDB Atlas Cluster. Espera `username, email, content, privacy y friends`.

`GET /posts` -> Obtener posts de la base de datos.

`PUT /edit/:postId` -> Edición de un post en específico. Espera `_id y content`

`DELETE /delete/:postId` -> Eliminar un post en específico. Espera `_id`

### Usuarios

`POST /newUser` -> Creación de post en MongoDB Atlas Cluster. Espera `username, email, content y password`.

`GET /allUsers` -> Obtener todos los usuarios de la base de datos.

`POST /user/:userEmail` -> Obtiene un usuario en específico. Espera `email y password`

`PUT /addFriend/:userEmail` -> Agrega amigo a lista de amigos de un usuario en específico (WIP). Espera `_id y email`.

`DELETE /deleteUser/:userId` -> Eliminar un usuario en específico. Espera `_id`


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

1. Haz `fork` de este repositorio
2. `git clone https://github.com/<tu-usuario>/reactibook-api.git`
3. Crea tus variables de entorno en un nuevo archivo `.env`. Necesita una conexión a un cluster de mongoDB o un servidor local de Mongo (`DB_CONNECTION`), y un placeholder para JSON Web Tokens (`JWT_KEY`).
4. `npm install` para instalar las dependencias necesarias.
5. `npm start` para correr el servidor local en `localhost:3000`. Esto creará un servidor con Express y además se conectara a tu base de datos. Se corre mediante `nodemon` por lo cual se refrescará automáticamente con cada cambio.
 
## Dependencias

   * "bcryptjs": "^2.4.3",
   * "body-parser": "^1.19.0",
   * "cors": "^2.8.5",
   * "dotenv": "^8.2.0",
   * "express": "^4.17.1",
   * "jsonwebtoken": "^8.5.1",
   * "mongoose": "^5.7.7",
   * "nodemon": "^1.19.4",
   * "validator": "^12.0.0"
