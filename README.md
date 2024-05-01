# WebSocket Server

This is a WebSocket server built with Strapi and the WebSocket library. It handles WebSocket connections, incoming messages, and saves messages to a database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/websocket-server.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

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

4. Start the server:

   ```bash
   npm run develop
   ```

## Usage

### Client Connection

The server listens for WebSocket connections on the specified port (default is 8080). Clients can connect to the server using a WebSocket client.

### Sending Messages

Clients can send messages to the server over the WebSocket connection. The server will log the received messages and echo them back to the client.

### Database Integration

The server saves incoming messages to a database. Make sure your database is set up and running before starting the server.

## Configuration

You can configure the server settings in the `.env` file. Here are the available configuration options:

- `PORT`: The port on which the server should listen for WebSocket connections.
- `DATABASE_HOST`: The hostname of the database server.
- `DATABASE_USER`: The username for accessing the database.
- `DATABASE_PASSWORD`: The password for accessing the database.
- `DATABASE_NAME`: The name of the database to use.

## Use Case

This WebSocket server can be used in real-time chat applications, online gaming platforms, or any application that requires real-time communication between clients and a server.