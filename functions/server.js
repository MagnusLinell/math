const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 4000;

app.use(
  '/.netlify/functions/',
  createProxyMiddleware({
    target: 'https://festive-beaver-65f40c.netlify.app',
    changeOrigin: true,
  })
);

app.listen(port, () => console.log(`Proxy listening at http://localhost:${port}`));

