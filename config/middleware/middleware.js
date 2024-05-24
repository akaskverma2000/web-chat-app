module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['https://web-chat-app-nu.vercel.app/'],
    },
    jwt: {
      secret: '14b56699-9042-4180-89b2-b4bbbb31de1e', // Set your JWT secret key here
    }
  },
};
