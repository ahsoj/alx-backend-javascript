const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (_req, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(responseText);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
