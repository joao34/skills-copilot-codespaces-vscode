// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments
const comments = require('./comments');

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});