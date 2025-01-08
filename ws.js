const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const server = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server running on ws://localhost:8080");

server.on('connection', (socket) => {
  console.log('New client connected');

  // Send a welcome message to the client
  socket.send(JSON.stringify({ message: "Welcome to the WebSocket server!" }));

  // Handle messages from the client
  socket.on('message', (message) => {
    console.log('Received:', message);

    // Echo the message back to the client
    socket.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });

  // Handle errors
  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});
