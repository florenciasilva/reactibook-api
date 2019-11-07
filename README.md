# Reactibook API

Creada con NodeJS, Express y Mongoose, hosteada en Heroku


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
