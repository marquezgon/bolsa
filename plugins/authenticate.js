'use strict';

const Candidato  = require('../models/candidato');

exports.register = function (server, options, next) {
  const validate = (request, decodedToken, callback) => {
    const { identity } = decodedToken;
    Candidato.findOne({ identity }).then((candidato) => {
      if(candidato) {
        return callback(null, true, decodedToken);
      }
    }).catch((data) => {
      return callback(null, false, decodedToken);
    })
  }
  server.auth.strategy('jwt', 'jwt', {
    key: server.settings.app.secret,
    validateFunc: validate
  })

  return next();
}

exports.register.attributes = {
  name: 'plugins-authenticate',
  dependencies: ['hapi-auth-jwt']
}
