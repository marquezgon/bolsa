'use strict';
const Hapi = require('hapi');
var Mongoose = require('mongoose');
var credentials = require('./credentials');
//var User = require('./models/user.js');

const mongoUri = credentials.mongoUri;
const secret = credentials.secret;

Mongoose.connect(mongoUri);
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
   console.log("Connection with database succeeded.");
});

// Create a server with a host and port
const server = new Hapi.Server({
    app: {
        secret,
        SALT_WORK_FACTOR: 12
    }

});

server.connection({
    host: 'localhost',
    port: 7777
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
