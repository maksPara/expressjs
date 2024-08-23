const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3055;

app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send('Hello Maksymilian!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
