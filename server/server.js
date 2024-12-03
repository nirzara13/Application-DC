// server/server.js

const express = require('express');
const app = express();
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Hello from the back-end!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
