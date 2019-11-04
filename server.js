const express = require('express');
import accountRouter from './resources/account/accounts.router';

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

module.exports = server;
