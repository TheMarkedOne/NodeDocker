const express = require('express');
const app = express();
const port = 3001;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, From NodeJS Shorty !');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
