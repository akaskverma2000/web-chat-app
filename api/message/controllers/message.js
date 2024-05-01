const logger = require('../../../logger/logger');
const Message = require('../../../models/Message');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken package

module.exports = {
    async find(ctx) {
        const { user } = ctx.state;
        if (!user) {
            return ctx.unauthorized('You are not logged in');
        }
        try {
            const messages = await Message.findAll();

            ctx.response.body = messages.map(message => ({
                id: message.id,
                content: message.content,
                timestamp: message.timestamp,
            }));
        } catch (error) {
            ctx.response.status = 500;
            logger.info(`message ${error}`);
            ctx.response.body = { error: 'An internal server error occurred' };
        }
    }
};
