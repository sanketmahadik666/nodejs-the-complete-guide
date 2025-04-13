const http = require('http');

const routes = require('./routes');
require('dotenv').config();
const config = require('dotenv').config();

const server = http.createServer(routes.handler);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
