const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { getAllUser, GetUserByID, createUser, Login } = require('./controller/userController');
const { getDataById, getAllData, createNewUserData } = require('./controller/userDataControler');
const { ValidateNewUser } = require('./middlewares/ValidateNewUser');
const { validateNewData } = require('./middlewares/ValidateNewData');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.post('/users', ValidateNewUser, createUser);
app.post('/data', validateNewData, createNewUserData);
app.post('/login', Login);

app.get('/users', getAllUser);
app.get('/users/:id', GetUserByID);
app.get('/data', getAllData);
app.get('/data/:id', getDataById);

module.exports = app;