const express = require('express');
const app = express();
const http = require('http').Server(app);
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');

//import routes
const user = require('./routes/user.js');
const machine = require('./routes/machine');
const renting = require('./routes/renting');
const profile = require('./routes/profile');

app.use(cors());
//connect to mongodb
mongoose.connect(process.env.DB_STRING, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
app.use(express.json());

app.use('/user', user);
app.use('/profile', profile);
app.use('/machine', machine);
app.use('/renting', renting);

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => { console.log('Server is running on: ' + PORT) });