# WebSocket Server

This is a WebSocket server built with Node.js and the WebSocket library. It handles WebSocket connections, incoming messages, and saves messages to a database.

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
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=mydatabase
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

### Client Connection

The server listens for WebSocket connections on the specified port (default is 3000). Clients can connect to the server using a WebSocket client.

### Sending Messages

Clients can send messages to the server over the WebSocket connection. The server will log the received messages and echo them back to the client.

### Database Integration

The server saves incoming messages to a database. Make sure your database is set up and running before starting the server.

## Configuration

You can configure the server settings in the `.env` file. Here are the available configuration options:

- `PORT`: The port on which the server should listen for WebSocket connections.
- `DB_HOST`: The hostname of the database server.
- `DB_USER`: The username for accessing the database.
- `DB_PASSWORD`: The password for accessing the database.
- `DB_NAME`: The name of the database to use.

## Use Case

This WebSocket server can be used in real-time chat applications, online gaming platforms, or any application that requires real-time communication between clients and a server.