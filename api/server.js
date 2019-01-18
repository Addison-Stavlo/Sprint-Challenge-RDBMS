const express = require('express');
const db = require('../dataAccess/db.js');
const server = express();

//middleware
server.use(express.json());

//routes


//exports
module.exports = server;