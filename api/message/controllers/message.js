const logger = require('../../../logger/logger');
const Message = require('../../../models/Message');
const jwt = require('jsonwebtoken');

/** Controller method to find messages for a logged-in user */
module.exports = {
    async find(ctx) {
        const { user } = ctx.state;
        if (!user) {
            return ctx.unauthorized('Hey there, looks like you forgot to log in!');
        }
        try {
            // Fetch messages based on the user_id
            const messages = await Message.findAll({
                where: {
                    user_id: user.id
                }
            });

            ctx.response.body = messages.map(message => ({
                id: message.id,
                content: message.content,
                timestamp: message.timestamp,
            }));
        } catch (error) {
            ctx.response.status = 500;
            ctx.response.body = { error: 'Oops, something went wrong on our end. Please try again later!' };
        }
    }
};
