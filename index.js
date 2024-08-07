const express = require('express');
const app = express();
const port = 3001;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World! This is my simple Node.js application.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
