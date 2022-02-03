const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

// will respond with db.json
app.get('/data', (req, res, next) => {
  res.setHeader('Content-type', 'application/json');
  res.sendFile(path.resolve(__dirname, '..', 'db.json'));
});

app.listen(3000, () => {
  console.log('Backend started on PORT 3000');
});