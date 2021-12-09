const express = require('express');

const path = require('path');

const app = express();

const public = express.static(path.join(__dirname, 'public'));

app.use('/public', public);

app.listen(80, () => {
  console.log("localhost:80");
})
