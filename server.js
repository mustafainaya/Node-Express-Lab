const express = require('express');
const server = express();

const Routes = require('./data/Routes');

server.use(express.json());

server.use('/api/posts', Routes);
server.get('/', (req, res) => {
	res.json('HELLO AND ALOHA');
});

module.exports = server;
