// Example: Using middleware in Express.js
const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Call next to pass the request to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
