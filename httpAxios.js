// Example: Making an HTTP GET request using axios
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error making HTTP request:', error);
    });
