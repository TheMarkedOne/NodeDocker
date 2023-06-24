const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, From NodeJS');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
