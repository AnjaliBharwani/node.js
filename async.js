async function fetchData() {
    // Asynchronous operation using await
    const result = await fetch('https://api.example.com/data');
    return result.json(); // Returns a Promise
}

// GET: Used to request data from a specified resource. 
// POST: Used to send data to the server to create or update a resource. 
// PUT: Used to update data on the server.
// DELETE: Used to delete a resource on the server
// PATCH: Used to partially update a resource on the server.

// 200 OK:
// 201 Created:
// 400 Bad Request:
// 401 Unauthorized:
// 403 Forbidden:
// 404 Not Found:
// 500 Internal Server Error:
// 503 Service Unavailable: