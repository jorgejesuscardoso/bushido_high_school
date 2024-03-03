const express = require('express');
const cors = require('cors');
const { getAllUser, GetUserByID, createUser } = require('./controller/userController');
const { getDataById, getAllData } = require('./controller/userDataControler');
const { ValidateNewUser } = require('./middlewares/ValidateNewUser');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', ValidateNewUser, createUser);

app.get('/users', getAllUser);
app.get('/users/:id', GetUserByID);
app.get('/data', getAllData);
app.get('/data/:id', getDataById);

module.exports = app;