// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding

const express = require('express');
const fs = require('node:fs');
const zlib = require('node:zlib');

const app = express();

app.get('/br', (req, res) => {
const rawBr = fs.createReadStream('index.html');
  const brotli = zlib.createBrotliCompress();

res.set({
  'Content-Encoding': 'br',
  'Content-Type': 'text/html'
});

rawBr.pipe(brotli).pipe(res);
});

app.get('/plain', (req, res) => {
const raw = fs.createReadStream('index.html');
  res.set({
    'Content-Type': 'text/html'
  });

  raw.pipe(res);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
