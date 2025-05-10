const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('pong from payments');
});

app.listen(PORT, () => {
  console.log(`Payments service running on port ${PORT}`);
});
