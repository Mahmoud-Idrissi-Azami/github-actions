const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bravo Mahmoud ! Site deploye sur Azure via GitHub Actions.</h1>');
});

app.listen(port, () => {
  console.log(`Serveur en cours sur le port ${port}`);
});
