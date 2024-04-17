const express = require('express');
const app = express();

// Define a GET endpoint
app.get('/api/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
    ];
    res.json(posts);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
