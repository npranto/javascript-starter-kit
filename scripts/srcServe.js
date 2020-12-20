const express = require('express');
const open = require('open');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/about.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening to port ${port}`);
    open(`http://localhost:${port}`);
  }
})

