const express = require('express');
const cors = require('cors');
const { getAllUserWithData, getAllUser } = require('./controller/userController');
const { getDataById } = require('./controller/userDataControler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', getAllUser);
app.get('/users/with_data', getAllUserWithData);
app.get('/users/:id', getDataById);

module.exports = app;