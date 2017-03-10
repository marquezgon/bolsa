'use strict';

const Joi = require('joi');
const Boom = require('boom');
const jwt = require('jsonwebtoken');
const Candidato = require('../models/candidato');

exports.register = function(server, options, next) {

  function createToken(email, userType, identity) {
      return jwt.sign({ email: email, scope : userType, identity: identity  }, server.settings.app.secret, { algorithm: 'HS256', expiresIn: 60*60*24 } );
  }

  server.route({
    method: 'POST',
    path: '/login',
    config: {
      validate: {
        payload: {
          email: Joi.string().required(),
          userType: Joi.string().required(),
          identity: Joi.string().required()
        }
      }
    },
    handler: function(request, reply) {
      const email = request.payload.email;
      const identity = request.payload.identity;
      const userType = request.payload.userType;
      Candidato.findOne({ identity }).then((user) => {
        if(!user) {
          const candidato = new Candidato({ email, identity });
          candidato.save().then(() => {
            const token = createToken(email, userType);
            return reply({ token: token }).code(200);
          })
        } else {
          const token = createToken(email, userType);
          return reply({ token: token }).code(200);
        }
      })
    }
  })

  next();
}

exports.register.attributes = {
  name: 'routes-auth'
}
