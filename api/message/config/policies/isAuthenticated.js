'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = async (ctx, next) => {
  // Retrieve authorization header
  const { authorization } = ctx.request.headers;

  if (!authorization) {
    return ctx.unauthorized('You must provide a valid JWT in the Authorization header');
  }

  // Extract JWT token
  const token = authorization.replace('Bearer ', '');

  try {
    // Verify JWT token
    const decoded = await strapi.plugins['users-permissions'].services.jwt.verify(token);

    // Attach user to the context
    ctx.state.user = decoded;

    return await next();
  } catch (err) {
    return ctx.badRequest('Invalid token');
  }
};
