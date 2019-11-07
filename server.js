import express from 'express';
import accountRouter from './resources/account/accounts.router';

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

export default server;
