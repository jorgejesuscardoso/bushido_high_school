const express = require('express');
const cors = require('cors');
const { getAllUser } = require('./controller/user.controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users/get_all', getAllUser);

module.exports = app;