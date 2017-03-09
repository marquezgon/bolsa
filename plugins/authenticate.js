'use strict';

exports.register = function (server, options, next) {
  const validate = (request, decodedToken, next) => {

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
