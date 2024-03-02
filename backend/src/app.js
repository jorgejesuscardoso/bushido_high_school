const express = require('express');
const cors = require('cors');
const { getAllUser, GetUserByID } = require('./controller/userController');
const { getDataById } = require('./controller/userDataControler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', getAllUser);
app.get('/users/:id', GetUserByID);
app.get('/users/data/:id', getDataById);

module.exports = app;