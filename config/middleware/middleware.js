module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['http://127.0.0.1:8080'],
    },
    jwt: {
      secret: '14b56699-9042-4180-89b2-b4bbbb31de1e', // Set your JWT secret key here
    }
  },
};
