const express = require('express');
const app = express();
const http = require('http').Server(app);
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const io = require('socket.io')(http);
const mongoose = require('mongoose');


app.use('/login', login);
app.use('/profile', profile);

const login = require('./Routes/login');
const profile = require('./Routes/profile');

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => { console.log('Server is running on: ' + PORT) });