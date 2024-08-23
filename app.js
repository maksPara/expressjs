const express = require('express');
const app = express();
const port = 3055;

app.get('/', (req, res) => {
  res.send('Hello Maks!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
