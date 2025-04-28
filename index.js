const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express !');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

