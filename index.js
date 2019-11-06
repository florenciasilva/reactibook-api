const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config({ path: "./.env" })



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json();
});

require('./app/routes/post.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 3000");
});