// npm init -y
// npm install express
// npm i nodemon 
// npm run dev

// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
