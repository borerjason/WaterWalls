const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(path.join(express.static(__dirname, '../client')));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
