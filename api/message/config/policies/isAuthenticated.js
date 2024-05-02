'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/** Middleware for verifying JWT tokens in the Authorization header */
module.exports = async (ctx, next) => {
  // Retrieve authorization header
  const { authorization } = ctx.request.headers;

  if (!authorization) {
    return ctx.unauthorized('Hold on, you forgot to bring your secret JWT in the Authorization header!');
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
    return ctx.badRequest('Uh oh, it seems like your token is not quite right. Please log in again!');
  }
};
