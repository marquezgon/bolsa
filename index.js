'use strict';
const Hapi = require('hapi');
const Mongoose = require('mongoose');
//const credentials = require('./credentials');
const GraphQL = require('hapi-graphql');
const schema = require('./schema/schema');
//var User = require('./models/user.js');

const mongoUri = credentials.mongoUri;
const secret = credentials.secret;

Mongoose.connect(mongoUri);
const db = Mongoose.connection;
Mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
   console.log("Connection with database succeeded.");
});

// Create a server with a host and port
const server = new Hapi.Server({
    app: {
        secret
    }

});

server.connection({
    host: 'localhost',
    port: 7777,
    routes: { cors: true }
});

server.register(
  [{
    register: require('hapi-auth-jwt')
  }, {
    register: GraphQL,
    options: {
      query: {
        schema,
        graphiql: true
      },
      route: {
        path: '/graphql',
        config: {  }
      }
    }
  }], () => server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
  })
);
