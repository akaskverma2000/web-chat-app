'use strict';

module.exports = {
    /**
     * Controller method to handle user login
     * @param {Object} ctx - The Koa context object
     * @returns {Object} - Returns JWT token and user information on successful login
     */
    async login(ctx) {
        const { identifier, password } = ctx.request.body;

        // Find the user based on the identifier (username or email)
        const user = await strapi.plugins['users-permissions'].services.user.fetch({
            [identifier.includes('@') ? 'email' : 'username']: identifier
        });

        if (!user) {
            return ctx.badRequest('Oops! We couldn\'t find an account with that username or email. Please double-check your credentials and try again. If you don\'t have an account, you can sign up for one.');
        }

        // Check if the password is valid
        const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(password, user.password);
        if (!validPassword) {
            return ctx.badRequest('Oops! The password you entered is incorrect. Double-check your password and try again. If you forgot your password, you can reset it.');
        }

        // Generate JWT token
        const token = strapi.plugins['users-permissions'].services.jwt.issue({
            id: user.id,
        });

        return {
            jwt: token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    },

    /**
     * Controller method to handle user registration
     * @param {Object} ctx - The Koa context object
     * @returns {Object} - Returns JWT token and user information on successful registration
     */
    async register(ctx) {
        const { username, email, password } = ctx.request.body;

        // Check if the username is already taken
        const userExists = await strapi.plugins['users-permissions'].services.user.fetch({
            username
        });

        if (userExists) {
            return ctx.badRequest('Oops! This username is already taken. Please choose a different username.');
        }

        // Check if the email is already taken
        const emailExists = await strapi.plugins['users-permissions'].services.user.fetch({
            email
        });

        if (emailExists) {
            return ctx.badRequest('Oops! This email address is already taken. Please choose a different email address.');
        }

        // Create a new user
        const newUser = await strapi.plugins['users-permissions'].services.user.add({
            username,
            email,
            password,
            role: 1,
            confirmed: true, // Set confirmed to true for newly registered users
            provider: 'local', // Set provider to 'local' for locally registered users
        });

        // Generate JWT token
        const token = strapi.plugins['users-permissions'].services.jwt.issue({
            id: newUser.id,
        });

        return {
            jwt: token,
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            },
        };
    },
};
