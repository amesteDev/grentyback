const express = require('express');
const app = express();
const http = require('http').Server(app);
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const io = require('socket.io')(http);
const mongoose = require('mongoose');


//connect to mongodb
mongoose.connect(process.env.DB_STRING, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => { console.log('Server is running on: ' + PORT) });