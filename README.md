# WebSocket Server Documentation

This documentation provides an overview of a WebSocket server built with Strapi and the WebSocket library. It explains how to install and configure the server, as well as how to use it for real-time communication between clients and the server.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/akashverma2000/websocket-server.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   HOST=127.0.0.1
   PORT=8080
   DATABASE_HOST=localhost
   DATABASE_USERNAME=root
   DATABASE_PASSWORD=password
   DATABASE_NAME=mydatabase
   DATABASE_PORT=3307
   JWT_SECRET=your_secret_key
   ```

4. **Start the Server:**

   ```bash
   npm run develop
   ```

## Usage

### Client Connection

The server listens for WebSocket connections on the specified port (default is 8080). Clients can connect to the server using a WebSocket client.

### Sending Messages

Clients can send messages to the server over the WebSocket connection. The server will log the received messages and echo them back to the client.

### Broadcasting Messages

The server can broadcast messages to all connected clients. This can be useful for real-time updates or notifications.

### Database Integration

The server saves incoming messages to a database. Ensure that your database is set up and running before starting the server.

## Database Diagram

![Web Chat DB Schema](https://github.com/akaskverma2000/web-chat-app/assets/63094947/2ee9a4cb-ed03-43d2-9e2a-48c0018eb411)

Schema Link: [Link](https://dbdiagram.io/d/Web-Chat-DB-Schema-663286705b24a634d0448391)

## Configuration

You can configure the server settings in the `.env` file. Here are the available configuration options:

- `PORT`: The port on which the server should listen for WebSocket connections.
- `DATABASE_HOST`: The hostname of the database server.
- `DATABASE_USER`: The username for accessing the database.
- `DATABASE_PASSWORD`: The password for accessing the database.
- `DATABASE_NAME`: The name of the database to use.

## Security

- **JWT Authentication:** The server uses JWT tokens for authentication. Ensure that the JWT secret is kept secure and is not exposed in your codebase.

- **Input Validation:** Validate user inputs to prevent malicious attacks such as SQL injection or XSS attacks.

## Use Case

This WebSocket server can be used in real-time chat applications, online gaming platforms, or any application that requires real-time communication between clients and a server.

## Best Practices

- **Error Handling:** Implement robust error handling to gracefully handle errors and prevent crashes.

- **Logging:** Use logging to track server events and debug issues.

- **Code Organization:** Organize your code into modules and follow best practices for code readability and maintainability.
